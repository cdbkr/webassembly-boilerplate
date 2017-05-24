(module
  (func $fact (param $n i32) (result i32)
    (if (i32.lt_s (get_local $n) (i32.const 1))
      (return (i32.const 1)))
        (return
        (i32.mul
          (get_local $n)
          (call $fact
            (i32.sub
              (get_local $n)
              (i32.const 1))))))
  (export "fact" (func $fact))
)