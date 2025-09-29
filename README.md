# Extended Utility Types

A library with over 100 utility types to empower TypeScript development.

## Install

```sh
npm i -D extended-utility-types
# Requires TypeScript >= 4.1
```

## Types

<div align="center">

[![Aliases]](dist/aliases)
[![Array]](dist/array)
[![Common]](dist/common)
[![Function]](dist/function)
[![Logical]](dist/logical)
[![Number]](dist/number)
[![Object]](dist/object)
[![String]](dist/string)
[![Union]](dist/union)

</div>

- Aliases
  - [`LiteralPrimitive`](dist/aliases/LiteralPrimitive.js)
  - [`LowercaseCharacter`](dist/aliases/LowercaseCharacter.js)
  - [`Maybe<T>`](dist/aliases/Maybe.js)
  - [`nil`](dist/aliases/Nil.js)
  - [`Nillable<T>`](dist/aliases/Nillable.js)
  - [`Nullable<T>`](dist/aliases/Nullable.js)
  - [`NumberLike`](dist/aliases/NumberLike.js)
  - [`Primitive`](dist/aliases/Primitive.js)
  - [`UppercaseCharacter`](dist/aliases/UppercaseCharacter.js)
  - [`Whitespace`](dist/aliases/Whitespace.js)
- Array
  - [`Chunk<T, N>`](dist/array/Chunk.js)
  - [`Filter<T, U>`](dist/array/Filter.js)
  - [`Flat<T, N>`](dist/array/Flat.js)
  - [`Includes<T, U>`](dist/array/Includes.js)
  - [`IndexOf<T, U, N>`](dist/array/IndexOf.js)
  - [`Initial<T>`](dist/array/Initial.js)
  - [`Join<T, S>`](dist/array/Join.js)
  - [`Pop<T>`](dist/array/Pop.js)
  - [`Push<T, U>`](dist/array/Push.js)
  - [`Reverse<T>`](dist/array/Reverse.js)
  - [`Shift<T>`](dist/array/Shift.js)
  - [`Slice<T, X, Y>`](dist/array/Slice.js)
  - [`Tail<T>`](dist/array/Tail.js)
  - [`Tuple<T, N>`](dist/array/Tuple.js)
  - [`TupleOf<T>`](dist/array/TupleOf.js)
  - [`Unshift<T, U>`](dist/array/Unshift.js)
  - [`Unzip<T>`](dist/array/Unzip.js)
  - [`Zip<T>`](dist/array/Zip.js)
- Common
  - [`CastAs<T, U>`](dist/common/CastAs.js)
  - [`IsEqual<X, Y>`](dist/common/IsEqual.js)
  - [`IsAny<T>`](dist/common/IsAny.js)
  - [`IsNever<T>`](dist/common/IsNever.js)
  - [`IsTuple<T>`](dist/common/IsTuple.js)
  - [`Opaque<T, U>`](dist/common/Opaque.js)
- Function
  - [`AppendParameter<T, U>`](dist/function/AppendParameter.js)
  - [`FunctionLike<T>`](dist/function/FunctionLike.js)
  - [`NoInfer<T>`](dist/function/NoInfer.js)
  - [`Promisable<T>`](dist/function/Promisable.js)
  - [`PromiseReturnType<T>`](dist/function/PromiseReturnType.js)
- Logical
  - [`And<X, Y>`](dist/logical/And.js)
  - [`If<T, X, Y>`](dist/logical/If.js)
  - [`Nand<X, Y>`](dist/logical/Nand.js)
  - [`Nor<X, Y>`](dist/logical/Nor.js)
  - [`Not<T>`](dist/logical/Not.js)
  - [`Or<X, Y>`](dist/logical/Or.js)
  - [`Xnor<X, Y>`](dist/logical/Xnor.js)
  - [`Xor<X, Y>`](dist/logical/Xor.js)
- Number
  - [`Absolute<N>`](dist/number/Absolute.js)
  - [`Add<X, Y>`](dist/number/Add.js)
  - [`BitAnd<X, Y>`](dist/number/BitAnd.js)
  - [`BitLeftShift<N>`](dist/number/BitLeftShift.js)
  - [`BitNot<N>`](dist/number/BitNot.js)
  - [`BitOr<X, Y>`](dist/number/BitOr.js)
  - [`BitRightShift<N>`](dist/number/BitRightShift.js)
  - [`BitXor<X, Y>`](dist/number/BitXor.js)
  - [`Compare<X, Y>`](dist/number/Compare.js)
  - [`GreaterThan<X, Y>`](dist/number/GreaterThan.js)
  - [`IsNegative<N>`](dist/number/IsNegative.js)
  - [`LessThan<X, Y>`](dist/number/LessThan.js)
  - [`Multiply<X, Y>`](dist/number/Multiply.js)
  - [`ParseInt<S>`](dist/number/ParseInt.js)
  - [`Range<X, Y>`](dist/number/Range.js)
  - [`Sign<N>`](dist/number/Sign.js)
  - [`Subtract<X, Y>`](dist/number/Subtract.js)
  - [`Sum<X, Y>`](dist/number/Sum.js)
- Object
  - [`Assign<T, U>`](dist/object/Assign.js)
  - [`Compact<T>`](dist/object/Compact.js)
  - [`DeepPartial<T>`](dist/object/DeepPartial.js)
  - [`DeepReadonly<T>`](dist/object/DeepReadonly.js)
  - [`Entries<T>`](dist/object/Entries.js)
  - [`EnumOf<T, U>`](dist/object/EnumOf.js)
  - [`ExclusiveOr<T, U>`](dist/object/ExclusiveOr.js)
  - [`Expand<T>`](dist/object/Expand.js)
  - [`ExtractReadonly<T>`](dist/object/ExtractReadonly.js)
  - [`ExtractRequired<T>`](dist/object/ExtractRequired.js)
  - [`InclusiveOr<T, K>`](dist/object/InclusiveOr.js)
  - [`IntersectionOf<T>`](dist/object/IntersectionOf.js)
  - [`Invert<T>`](dist/object/Invert.js)
  - [`KeyBy<T, U>`](dist/object/KeyBy.js)
  - [`Lookup<T, K>`](dist/object/Lookup.js)
  - [`Mutable<T>`](dist/object/Mutable.js)
  - [`NoneOrAll<T>`](dist/object/NoneOrAll.js)
  - [`OmitAllBy<T, U>`](dist/object/OmitAllBy.js)
  - [`OmitBy<T, U, K>`](dist/object/OmitBy.js)
  - [`OmitDeep<T, K>`](dist/object/OmitDeep.js)
  - [`OmitStrict<T, K>`](dist/object/OmitStrict.js)
  - [`PickAllBy<T, U>`](dist/object/PickAllBy.js)
  - [`PickBy<T, U, K>`](dist/object/PickBy.js)
  - [`PickDeep<T, K>`](dist/object/PickDeep.js)
  - [`PickRequired<T, K>`](dist/object/PickRequired.js)
  - [`RecordOf<T>`](dist/object/RecordOf.js)
- String
  - [`CamelCase<S>`](dist/string/CamelCase.js)
  - [`ConstantCase<S>`](dist/string/ConstantCase.js)
  - [`Delimit<S, U>`](dist/string/Delimit.js)
  - [`Get<T, P>`](dist/string/Get.js)
  - [`Length<S>`](dist/string/Length.js)
  - [`PadEnd<S, N, T>`](dist/string/PadEnd.js)
  - [`PadStart<S, N, T>`](dist/string/PadStart.js)
  - [`PascalCase<S>`](dist/string/PascalCase.js)
  - [`Path<T>`](dist/string/Path.js)
  - [`PathParameters<S>`](dist/string/PathParameters.js)
  - [`Printf<S>`](dist/string/Printf.js)
  - [`Repeat<S, N>`](dist/string/Repeat.js)
  - [`Replace<S, T, U>`](dist/string/Replace.js)
  - [`ReplaceAll<S, T, U>`](dist/string/ReplaceAll.js)
  - [`SliceString<S, X, Y>`](dist/string/SliceString.js)
  - [`Split<S, U>`](dist/string/Split.js)
  - [`SplitWith<S, U>`](dist/string/SplitWith.js)
  - [`StrictPath<T>`](dist/string/StrictPath.js)
  - [`Trim<S>`](dist/string/Trim.js)
  - [`TrimEnd<S>`](dist/string/TrimEnd.js)
  - [`TrimStart<S>`](dist/string/TrimStart.js)
- Union
  - [`ExcludeStrict<T, U>`](dist/union/ExcludeStrict.js)
  - [`ExtractStrict<T, U>`](dist/union/ExtractStrict.js)
  - [`IsUnion<T>`](dist/union/IsUnion.js)
  - [`LastType<T>`](dist/union/LastType.js)
  - [`LiteralUnion<T, U>`](dist/union/LiteralUnion.js)
  - [`Permutate<T>`](dist/union/Permutate.js)
  - [`SymmetricDifference<T, U>`](dist/union/SymmetricDifference.js)
  - [`UnionOf<T>`](dist/union/UnionOf.js)
  - [`Distribute<T>`](dist/union/Distribute.js)

[Aliases]: https://img.shields.io/badge/10-Aliases-FF9C9F?style=for-the-badge&labelColor=363C44
[Array]: https://img.shields.io/badge/18-Array-FEC98F?style=for-the-badge&labelColor=363C44
[Common]: https://img.shields.io/badge/6-Common-FEDD9E?style=for-the-badge&labelColor=363C44
[Function]: https://img.shields.io/badge/5-Function-B9E9AA?style=for-the-badge&labelColor=363C44
[Logical]: https://img.shields.io/badge/8-Logical-B9F9E6?style=for-the-badge&labelColor=363C44
[Number]: https://img.shields.io/badge/18-Number-B1F1F4?style=for-the-badge&labelColor=363C44
[Object]: https://img.shields.io/badge/26-Object-88C5FF?style=for-the-badge&labelColor=363C44
[String]: https://img.shields.io/badge/21-String-C7B4E0?style=for-the-badge&labelColor=363C44
[Union]: https://img.shields.io/badge/9-Union-F8CEEE?style=for-the-badge&labelColor=363C44
