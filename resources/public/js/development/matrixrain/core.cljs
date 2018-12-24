(ns matrixrain.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def textsize 10)

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
  (let [rowsrange (range (rowcount grid))
        colsrange (range (colcount grid))]
    (loop [cnt 10
           grd grid]
      (if (zero? cnt)
        grd
        (recur (dec cnt)
               (assoc-in grd
                         [(rand-nth rowsrange) (rand-nth colsrange)]
                         (rand-nth symbols)))))))


(comment

(dotimes [n 10] ; control change-rate of symbol changes
      (assoc-in
       grid
       [(rand-nth rowsrange) (rand-nth colsrange)]
       (rand-nth symbols)))

(update-grid [[1 2 3]
              [4 5 6]
              [7 8 9]])

(let [a (atom [])]
  (dotimes [n 10]
    (swap! a conj n))
  (deref a))

(let [a []]
  (dotimes [n 10]
    (prn (conj a n))))
)

(defn get-item-at [grid row col]
  (get-in grid [row col]))

;;;;;;;;;;;;;;;;
;; QUIL Stuff ;;
;;;;;;;;;;;;;;;;

(defn setup []
  (q/frame-rate 5)
  {:grid (create-grid
          (int (/ (q/height) textsize))
          (int (/ (q/width) textsize)))})

(defn update-state [state]
  (assoc state :grid (update-grid (:grid state))))

(defn draw-state [state]
  (q/background 0)
  (q/fill 255)
  (q/text-size textsize)
  (let [grid (:grid state)]
    (dorun
     (for [row (range (rowcount grid))
           col (range (colcount grid))]
       (do
         (q/fill 0 255 0)
         (q/text (get-in grid [row col]) (* col textsize) (* (inc row) textsize)))))))

;; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch matrixrain
    :host "matrixrain"
    :size [500 500]
    :setup setup
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

;; uncomment this line to reset the sketch:
(run-sketch)
