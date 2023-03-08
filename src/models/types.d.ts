type FT<P = {}> = FunctionType<P>;

interface FunctionType<P = {}> {
  (args: P): any;
}
