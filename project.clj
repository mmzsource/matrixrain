(defproject matrixrain "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [quil "2.8.0"]
                 [org.clojure/clojurescript "1.10.439"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.16"]
            [lein-doo "0.1.10"]]
  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:dependencies [[cider/piggieback "0.3.10"]
                                  [figwheel-sidecar "0.5.16"]]
                   :source-paths ["cljs_src"]
                   :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}}

  :clean-targets ^{:protect false} ["resources/public/js"]

  :doo {:build "test"
        :alias {:default [:phantom]}}

  :cljsbuild
  {:builds [; development build with figwheel hot swap
            {:id "development"
             :source-paths ["src"]
             :figwheel true
             :compiler
             {:main "matrixrain.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/development"
              :asset-path "js/development"}}
            ; test build
            {:id "test"
             :source-paths ["src" "test"]
             :compiler {:main "matrixrain.runner"
                        :output-to "resources/public/js/testable.js"
                        :optimizations :none}}
            ; minified and bundled build for deployment
            {:id "optimized"
             :source-paths ["src"]
             :compiler
             {:main "matrixrain.core"
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js/optimized"
              :asset-path "js/optimized"
              :optimizations :advanced
              :closure-output-charset "iso-8859-1"}}]})
