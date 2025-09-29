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
  - [`LiteralPrimitive`](dist/aliases/LiteralPrimitive.ts)
  - [`LowercaseCharacter`](dist/aliases/LowercaseCharacter.ts)
  - [`Maybe<T>`](dist/aliases/Maybe.ts)
  - [`nil`](dist/aliases/Nil.ts)
  - [`Nillable<T>`](dist/aliases/Nillable.ts)
  - [`Nullable<T>`](dist/aliases/Nullable.ts)
  - [`NumberLike`](dist/aliases/NumberLike.ts)
  - [`Primitive`](dist/aliases/Primitive.ts)
  - [`UppercaseCharacter`](dist/aliases/UppercaseCharacter.ts)
  - [`Whitespace`](dist/aliases/Whitespace.ts)
- Array
  - [`Chunk<T, N>`](dist/array/Chunk.ts)
  - [`Filter<T, U>`](dist/array/Filter.ts)
  - [`Flat<T, N>`](dist/array/Flat.ts)
  - [`Includes<T, U>`](dist/array/Includes.ts)
  - [`IndexOf<T, U, N>`](dist/array/IndexOf.ts)
  - [`Initial<T>`](dist/array/Initial.ts)
  - [`Join<T, S>`](dist/array/Join.ts)
  - [`Pop<T>`](dist/array/Pop.ts)
  - [`Push<T, U>`](dist/array/Push.ts)
  - [`Reverse<T>`](dist/array/Reverse.ts)
  - [`Shift<T>`](dist/array/Shift.ts)
  - [`Slice<T, X, Y>`](dist/array/Slice.ts)
  - [`Tail<T>`](dist/array/Tail.ts)
  - [`Tuple<T, N>`](dist/array/Tuple.ts)
  - [`TupleOf<T>`](dist/array/TupleOf.ts)
  - [`Unshift<T, U>`](dist/array/Unshift.ts)
  - [`Unzip<T>`](dist/array/Unzip.ts)
  - [`Zip<T>`](dist/array/Zip.ts)
- Common
  - [`CastAs<T, U>`](dist/common/CastAs.ts)
  - [`IsEqual<X, Y>`](dist/common/IsEqual.ts)
  - [`IsAny<T>`](dist/common/IsAny.ts)
  - [`IsNever<T>`](dist/common/IsNever.ts)
  - [`IsTuple<T>`](dist/common/IsTuple.ts)
  - [`Opaque<T, U>`](dist/common/Opaque.ts)
- Function
  - [`AppendParameter<T, U>`](dist/function/AppendParameter.ts)
  - [`FunctionLike<T>`](dist/function/FunctionLike.ts)
  - [`NoInfer<T>`](dist/function/NoInfer.ts)
  - [`Promisable<T>`](dist/function/Promisable.ts)
  - [`PromiseReturnType<T>`](dist/function/PromiseReturnType.ts)
- Logical
  - [`And<X, Y>`](dist/logical/And.ts)
  - [`If<T, X, Y>`](dist/logical/If.ts)
  - [`Nand<X, Y>`](dist/logical/Nand.ts)
  - [`Nor<X, Y>`](dist/logical/Nor.ts)
  - [`Not<T>`](dist/logical/Not.ts)
  - [`Or<X, Y>`](dist/logical/Or.ts)
  - [`Xnor<X, Y>`](dist/logical/Xnor.ts)
  - [`Xor<X, Y>`](dist/logical/Xor.ts)
- Number
  - [`Absolute<N>`](dist/number/Absolute.ts)
  - [`Add<X, Y>`](dist/number/Add.ts)
  - [`BitAnd<X, Y>`](dist/number/BitAnd.ts)
  - [`BitLeftShift<N>`](dist/number/BitLeftShift.ts)
  - [`BitNot<N>`](dist/number/BitNot.ts)
  - [`BitOr<X, Y>`](dist/number/BitOr.ts)
  - [`BitRightShift<N>`](dist/number/BitRightShift.ts)
  - [`BitXor<X, Y>`](dist/number/BitXor.ts)
  - [`Compare<X, Y>`](dist/number/Compare.ts)
  - [`GreaterThan<X, Y>`](dist/number/GreaterThan.ts)
  - [`IsNegative<N>`](dist/number/IsNegative.ts)
  - [`LessThan<X, Y>`](dist/number/LessThan.ts)
  - [`Multiply<X, Y>`](dist/number/Multiply.ts)
  - [`ParseInt<S>`](dist/number/ParseInt.ts)
  - [`Range<X, Y>`](dist/number/Range.ts)
  - [`Sign<N>`](dist/number/Sign.ts)
  - [`Subtract<X, Y>`](dist/number/Subtract.ts)
  - [`Sum<X, Y>`](dist/number/Sum.ts)
- Object
  - [`Assign<T, U>`](dist/object/Assign.ts)
  - [`Compact<T>`](dist/object/Compact.ts)
  - [`DeepPartial<T>`](dist/object/DeepPartial.ts)
  - [`DeepReadonly<T>`](dist/object/DeepReadonly.ts)
  - [`Entries<T>`](dist/object/Entries.ts)
  - [`EnumOf<T, U>`](dist/object/EnumOf.ts)
  - [`ExclusiveOr<T, U>`](dist/object/ExclusiveOr.ts)
  - [`Expand<T>`](dist/object/Expand.ts)
  - [`ExtractReadonly<T>`](dist/object/ExtractReadonly.ts)
  - [`ExtractRequired<T>`](dist/object/ExtractRequired.ts)
  - [`InclusiveOr<T, K>`](dist/object/InclusiveOr.ts)
  - [`IntersectionOf<T>`](dist/object/IntersectionOf.ts)
  - [`Invert<T>`](dist/object/Invert.ts)
  - [`KeyBy<T, U>`](dist/object/KeyBy.ts)
  - [`Lookup<T, K>`](dist/object/Lookup.ts)
  - [`Mutable<T>`](dist/object/Mutable.ts)
  - [`NoneOrAll<T>`](dist/object/NoneOrAll.ts)
  - [`OmitAllBy<T, U>`](dist/object/OmitAllBy.ts)
  - [`OmitBy<T, U, K>`](dist/object/OmitBy.ts)
  - [`OmitDeep<T, K>`](dist/object/OmitDeep.ts)
  - [`OmitStrict<T, K>`](dist/object/OmitStrict.ts)
  - [`PickAllBy<T, U>`](dist/object/PickAllBy.ts)
  - [`PickBy<T, U, K>`](dist/object/PickBy.ts)
  - [`PickDeep<T, K>`](dist/object/PickDeep.ts)
  - [`PickRequired<T, K>`](dist/object/PickRequired.ts)
  - [`RecordOf<T>`](dist/object/RecordOf.ts)
- String
  - [`CamelCase<S>`](dist/string/CamelCase.ts)
  - [`ConstantCase<S>`](dist/string/ConstantCase.ts)
  - [`Delimit<S, U>`](dist/string/Delimit.ts)
  - [`Get<T, P>`](dist/string/Get.ts)
  - [`Length<S>`](dist/string/Length.ts)
  - [`PadEnd<S, N, T>`](dist/string/PadEnd.ts)
  - [`PadStart<S, N, T>`](dist/string/PadStart.ts)
  - [`PascalCase<S>`](dist/string/PascalCase.ts)
  - [`Path<T>`](dist/string/Path.ts)
  - [`PathParameters<S>`](dist/string/PathParameters.ts)
  - [`Printf<S>`](dist/string/Printf.ts)
  - [`Repeat<S, N>`](dist/string/Repeat.ts)
  - [`Replace<S, T, U>`](dist/string/Replace.ts)
  - [`ReplaceAll<S, T, U>`](dist/string/ReplaceAll.ts)
  - [`SliceString<S, X, Y>`](dist/string/SliceString.ts)
  - [`Split<S, U>`](dist/string/Split.ts)
  - [`SplitWith<S, U>`](dist/string/SplitWith.ts)
  - [`StrictPath<T>`](dist/string/StrictPath.ts)
  - [`Trim<S>`](dist/string/Trim.ts)
  - [`TrimEnd<S>`](dist/string/TrimEnd.ts)
  - [`TrimStart<S>`](dist/string/TrimStart.ts)
- Union
  - [`ExcludeStrict<T, U>`](dist/union/ExcludeStrict.ts)
  - [`ExtractStrict<T, U>`](dist/union/ExtractStrict.ts)
  - [`IsUnion<T>`](dist/union/IsUnion.ts)
  - [`LastType<T>`](dist/union/LastType.ts)
  - [`LiteralUnion<T, U>`](dist/union/LiteralUnion.ts)
  - [`Permutate<T>`](dist/union/Permutate.ts)
  - [`SymmetricDifference<T, U>`](dist/union/SymmetricDifference.ts)
  - [`UnionOf<T>`](dist/union/UnionOf.ts)
  - [`Distribute<T>`](dist/union/Distribute.ts)

[Aliases]: https://img.shields.io/badge/10-Aliases-FF9C9F?style=for-the-badge&labelColor=363C44
[Array]: https://img.shields.io/badge/18-Array-FEC98F?style=for-the-badge&labelColor=363C44
[Common]: https://img.shields.io/badge/6-Common-FEDD9E?style=for-the-badge&labelColor=363C44
[Function]: https://img.shields.io/badge/5-Function-B9E9AA?style=for-the-badge&labelColor=363C44
[Logical]: https://img.shields.io/badge/8-Logical-B9F9E6?style=for-the-badge&labelColor=363C44
[Number]: https://img.shields.io/badge/18-Number-B1F1F4?style=for-the-badge&labelColor=363C44
[Object]: https://img.shields.io/badge/26-Object-88C5FF?style=for-the-badge&labelColor=363C44
[String]: https://img.shields.io/badge/21-String-C7B4E0?style=for-the-badge&labelColor=363C44
[Union]: https://img.shields.io/badge/9-Union-F8CEEE?style=for-the-badge&labelColor=363C44
