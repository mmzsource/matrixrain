(ns matrixrain.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def framerate 60)          ;; integer. must be > 0
(def updates-per-second 25) ;; integer. must be > 0
(def symbol-change-rate 7)  ;; integer. must be >= 0

(def symbols "日二ケチヤホソネリヒヲセメニイヘムレロワスエンハモキヨカナウアノクトフサシオミヌツマルテユラタコ７Ｚ：・．＝＊＋－＜＞")
(def textsize 50)           ;; integer. must be > 0

;;;;;;;;;;;;;;;;
;; GAME SPEED ;;
;;;;;;;;;;;;;;;;

(defn now []
  (.getTime (js/Date.)))

(def millis-until-game-update (/ 1000 updates-per-second))

(defn update-needed? [state]
  (let [last-time    (:last-time state)
        current-time (now)]
    (> (- current-time last-time) millis-until-game-update)))

;;;;;;;;;;
;; GRID ;;
;;;;;;;;;;

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

(defn repeat-black-rgb [n]
  (into [] (take n (cycle [[0 0 0]]))))

(defn generate-green-values [n]
  (let [fraction (int (/ 255 n))]
    (into [] (take n (iterate (partial + fraction) fraction)))))

(defn generate-tail [green-values]
  (mapv #(into [] (interpose % [0 0])) green-values))

(defn create-raindrop [rows]
  (let [filler   (repeat-black-rgb rows)
        tail     (generate-tail (generate-green-values (inc (rand-int (* 3 rows)))))
        head     [[150 150 150] [200 200 200] [255 255 255]]
        raindrop (->> filler
                      (reduce conj head)
                      (reduce conj tail)
                      (reduce conj filler))
        pointer  (dec (count raindrop))]
    {:colours  []
     :raindrop raindrop
     :speed (+ 0.6 (rand 0.9))
     :head  pointer}))

(defn update-raindrops [rain rowcount]
  (let [{:keys [raindrop head speed]} rain
        new-head (- head speed)]
    (if (< new-head rowcount)
      (create-raindrop rowcount)
      (merge rain {:colours (subvec raindrop (- head rowcount) head)
                   :head    new-head}))))


;;;;;;;;;;;;;;;;
;; QUIL Stuff ;;
;;;;;;;;;;;;;;;;

(defn setup []
  (q/frame-rate framerate)
  (let [grid        (create-grid
                     (int (/ (q/height) textsize))
                     (int (/ (q/width) textsize)))
        raindrops   (create-raindrop (rowcount grid))]
    {:grid        grid
     :raindrops   raindrops
     :last-time   (now)}))

(defn update-state [state]
  (let [grid (:grid state)]
    (def test-state state)
    (if (update-needed? state)
      (merge state
             {:grid      (nth (iterate update-grid grid) symbol-change-rate)
              :raindrops (update-raindrops (:raindrops state) (rowcount grid))
              :last-time (now)})
      state)))

(defn draw-state [state]
  (q/background 0)
  (q/fill 255)
  (q/text-size textsize)
  (let [grid      (:grid state)
        raindrops (:raindrops state)]
    (doseq [row (range (rowcount grid))
            col (range (colcount grid))]
      (if (= col 0)
        (let [[r g b] (get-in (:colours raindrops) [row])]
          (q/fill r g b))
        (q/fill 0 0 255))
      (q/text (get-in grid [row col]) (* col textsize) (* (inc row) textsize)))))


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

(comment

  (def fietsbel {:raindrops [{:colours  [[0 0 0] [0 0 1] [0 0 2]]
                              :raindrop [[0 0 0] [0 0 1] [0 0 2]]
                              :speed    0.0
                              :head     2}
                             {:colours  [[1 0 0] [1 0 1] [1 0 2]]
                              :raindrop [[1 0 0] [1 0 1] [1 0 2]]
                              :speed    0.2
                              :head     1}]})

  (doseq [row (range 2)
          col (range 3)]
    (let [[r g b] (get-in (:raindrops fietsbel) [row :colours col])]
      (println "row:col" row ":" col " - r g b - " r g b)))
)
