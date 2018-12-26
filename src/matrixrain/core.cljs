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

;;;;;;;;;;;;;;;;
;; QUIL Stuff ;;
;;;;;;;;;;;;;;;;

(defn setup []
  (q/frame-rate 5)
  (let [grid        (create-grid
                     (int (/ (q/height) textsize))
                     (int (/ (q/width) textsize)))
        colour-grid (create-colour-grid grid)]
    {:grid        grid
     :colour-grid colour-grid}))

(defn update-state [state]
  (assoc-in state [:grid] (nth (iterate update-grid (:grid state)) 20)))

(defn draw-state [state]
  (q/background 0)
  (q/fill 255)
  (q/text-size textsize)
  (let [grid (:grid state)]
    (dorun
     (for [row (range (rowcount grid))
           col (range (colcount grid))]
       (do
         (if (= col 0)
           (let [clr (get-in (:colour-grid state) [col row])]
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
