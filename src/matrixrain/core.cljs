(ns matrixrain.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def textsize 50)

(def symbols "日二ケチヤホソネリヒヲセメニイヘムレロワスエンハモキヨカナウアノクトフサシオミヌツマルテユラタコ０７８Ｚ：・．＝＊＋－＜＞")

;;;;;;;;;;;;;;;;
;; GRID stuff ;;
;;;;;;;;;;;;;;;;

(defn create-grid [rows cols]
  (into [] (map vec (partition cols (repeatedly (* rows cols) #(rand-nth symbols))))))

(defn rowcount [grid]
  (count grid))

(defn colcount [grid]
  (count (first grid)))

(defn update-grid [grid]
  (let [rand-row (rand-int (rowcount grid))
        rand-col (rand-int (colcount grid))]
    (assoc-in grid [rand-row rand-col] (rand-nth symbols))))


(defn create-colour-grid [grid]
  {0 [[0 0 0] [0 50 0] [0 100 0]
      [0 150 0] [0 200 0] [0 255 0]
      [0 255 0] [150 150 150] [200 200 200]
      [255 255 255]]})

(defn create-raindrops [grid]
  {:colours  []
   :raindrop [[  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0]
              [  0   0   0] [  0   0   0] [  0  25   0] [  0  50   0] [  0  75   0]
              [  0 100   0] [  0 125   0] [  0 150   0] [  0 175   0] [  0 200   0]
              [  0 225   0] [  0 255   0] [205 205 205] [230 230 230] [255 255 255]
              [  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0]
              [  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0] [  0   0   0]]
   :speed    1
   :head     29})

(defn update-raindrops [rd rc]
  (let [raindrop (:raindrop rd)
        head     (:head     rd)
        speed    (:speed    rd)
        new-head (- head speed)]
    (if (< new-head rc)
      (merge rd {:colours []
                 :head 29})
      (merge rd {:colours (subvec raindrop (- head rc) head)
                 :head    new-head}))))

;;;;;;;;;;;;;;;;
;; QUIL Stuff ;;
;;;;;;;;;;;;;;;;

(defn setup []
  (q/frame-rate 5)
  (let [grid        (create-grid
                     (int (/ (q/height) textsize))
                     (int (/ (q/width) textsize)))
        raindrops   (create-raindrops grid)]
    {:grid        grid
     :raindrops   raindrops}))

(defn update-state [state]
  (let [grid (:grid state)]
    (def test-state state)
    (merge state
           {:grid      (nth (iterate update-grid grid) 20)
            :raindrops (update-raindrops (:raindrops state) (rowcount grid))})))

(defn draw-state [state]
  (q/background 0)
  (q/fill 255)
  (q/text-size textsize)
  (let [grid      (:grid state)
        raindrops (:raindrops state)]
    (dorun
     (for [row (range (rowcount grid))
           col (range (colcount grid))]
       (do
         (if (= col 0)
           (let [clr (get-in (:colours raindrops) [row])]
             (q/fill (first clr) (second clr) (last clr)))
           (q/fill 255 0 0))
         (q/text (get-in grid [row col]) (* col textsize) (* (inc row) textsize)))))))

;; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch matrixrain
    :host       "matrixrain"
    :size       [500 500]
    :setup      setup
    :update     update-state
    :draw       draw-state
    :middleware [m/fun-mode]))

;; uncomment this line to reset the sketch:
(run-sketch)
