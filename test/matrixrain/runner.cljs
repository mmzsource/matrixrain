(ns matrixrain.runner
  (:require [cljs.test :as test]
            [doo.runner :refer-macros [doo-tests]]
            [matrixrain.core-test]))

(doo-tests 'matrixrain.core-test)
