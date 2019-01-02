(ns matrixrain.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; RAIN SYMBOLS AND SIZE ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;


(def symbols "日二ケチヤホソネリヒヲセメニイヘムレロワスエンハモキヨカナウアノクトフサシオミヌツマルテユラタコ７Ｚ：・．＝＊＋－＜＞")
(def textsize 10)


;;;;;;;;;;;;;;;;
;; GAME SPEED ;;
;;;;;;;;;;;;;;;;


(def framerate 60)
(def updates-per-second 25)
(def symbol-change-rate 20)


(defn now [] (.getTime (js/Date.)))


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


;;;;;;;;;;;;;;;;;;;;;;;;;
;; RAINDROPS & COLOURS ;;
;;;;;;;;;;;;;;;;;;;;;;;;;


(defn repeat-black-rgb [n]
  (into [] (take n (cycle [[0 0 0]]))))


(defn generate-green-values [n]
  (let [fraction (int (/ 255 n))]
    (into [] (take n (iterate (partial + fraction) fraction)))))


(defn generate-tail [green-values]
  (mapv #(into [] (interpose % [0 0])) green-values))


(defn random-tail-length
  "max tail length is coupled to the number of visible rows"
  [rowcount]
  (inc (rand-int (* 2 rowcount))))


(defn random-drop-speed [] (+ 0.7 (rand 0.9)))


(defn create-raindrop [rowcount]
  (let [filler   (repeat-black-rgb rowcount)
        tail     (generate-tail (generate-green-values (random-tail-length rowcount)))
        head     [[150 150 150] [200 200 200] [255 255 255]]
        raindrop (->> filler
                      (reduce conj head)
                      (reduce conj tail)
                      (reduce conj filler))]
    {:colours  []
     :raindrop raindrop
     :speed    (random-drop-speed)
     :head     (dec (count raindrop))}))


(defn create-raindrops [grid]
  (let [rows      (rowcount grid)
        cols      (colcount grid)]
    (mapv #(create-raindrop rows) (range cols))))


(defn update-raindrop [rain rowcount]
  (let [{:keys [raindrop head speed]} rain
        new-head (- head speed)]
    (if (< new-head rowcount)
      (create-raindrop rowcount)
      (merge rain {:colours (subvec raindrop (- head rowcount) head)
                   :head    new-head}))))


(defn update-raindrops [state]
  (let [rowcount  (rowcount (:grid state))
        raindrops (:raindrops state)]
    (mapv #(update-raindrop % rowcount) raindrops)))


;;;;;;;;;;;;;;;;
;; QUIL Stuff ;;
;;;;;;;;;;;;;;;;


(defn setup []
  (q/frame-rate framerate)
  (let [grid      (create-grid
                   (int (/ (q/height) textsize))
                   (int (/ (q/width) textsize)))
        raindrops (create-raindrops grid)]
    {:grid        grid
     :raindrops   raindrops
     :last-time   (now)}))


(defn update-state [state]
  (let [grid (:grid state)]
    #_(def test-state state)
    (if (update-needed? state)
      (merge state
             {:grid      (nth (iterate update-grid grid) symbol-change-rate)
              :raindrops (update-raindrops state)
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
      (let [[r g b] (get-in raindrops [col :colours row])]
        (when (not= [r g b] [0 0 0])
          (q/fill r g b)
          (q/text (get-in grid [row col]) (* col textsize) (* (inc row) textsize)))))))


;; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch matrixrain
    :host       "matrixrain"
    :size       [750 500]
    :setup      setup
    :update     update-state
    :draw       draw-state
    :middleware [m/fun-mode]))


;; execute this line to reset the sketch:
(run-sketch)
