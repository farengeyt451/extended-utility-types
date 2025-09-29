# Extended Utility Types

A library with over 100 utility types to empower TypeScript development.

## Install

```sh
npm i -D extended-utility-types
# Requires TypeScript >= 4.1
```

## Types

<div align="center">

[![Aliases]](typings/aliases)
[![Array]](typings/array)
[![Common]](typings/common)
[![Function]](typings/function)
[![Logical]](typings/logical)
[![Number]](typings/number)
[![Object]](typings/object)
[![String]](typings/string)
[![Union]](typings/union)

</div>

- Aliases
  - [`LiteralPrimitive`](typings/aliases/LiteralPrimitive.d.ts)
  - [`LowercaseCharacter`](typings/aliases/LowercaseCharacter.d.ts)
  - [`Maybe<T>`](typings/aliases/Maybe.d.ts)
  - [`nil`](typings/aliases/Nil.d.ts)
  - [`Nillable<T>`](typings/aliases/Nillable.d.ts)
  - [`Nullable<T>`](typings/aliases/Nullable.d.ts)
  - [`NumberLike`](typings/aliases/NumberLike.d.ts)
  - [`Primitive`](typings/aliases/Primitive.d.ts)
  - [`UppercaseCharacter`](typings/aliases/UppercaseCharacter.d.ts)
  - [`Whitespace`](typings/aliases/Whitespace.d.ts)
- Array
  - [`Chunk<T, N>`](typings/array/Chunk.d.ts)
  - [`Filter<T, U>`](typings/array/Filter.d.ts)
  - [`Flat<T, N>`](typings/array/Flat.d.ts)
  - [`Includes<T, U>`](typings/array/Includes.d.ts)
  - [`IndexOf<T, U, N>`](typings/array/IndexOf.d.ts)
  - [`Initial<T>`](typings/array/Initial.d.ts)
  - [`Join<T, S>`](typings/array/Join.d.ts)
  - [`Pop<T>`](typings/array/Pop.d.ts)
  - [`Push<T, U>`](typings/array/Push.d.ts)
  - [`Reverse<T>`](typings/array/Reverse.d.ts)
  - [`Shift<T>`](typings/array/Shift.d.ts)
  - [`Slice<T, X, Y>`](typings/array/Slice.d.ts)
  - [`Tail<T>`](typings/array/Tail.d.ts)
  - [`Tuple<T, N>`](typings/array/Tuple.d.ts)
  - [`TupleOf<T>`](typings/array/TupleOf.d.ts)
  - [`Unshift<T, U>`](typings/array/Unshift.d.ts)
  - [`Unzip<T>`](typings/array/Unzip.d.ts)
  - [`Zip<T>`](typings/array/Zip.d.ts)
- Common
  - [`CastAs<T, U>`](typings/common/CastAs.d.ts)
  - [`IsEqual<X, Y>`](typings/common/IsEqual.d.ts)
  - [`IsAny<T>`](typings/common/IsAny.d.ts)
  - [`IsNever<T>`](typings/common/IsNever.d.ts)
  - [`IsTuple<T>`](typings/common/IsTuple.d.ts)
  - [`Opaque<T, U>`](typings/common/Opaque.d.ts)
- Function
  - [`AppendParameter<T, U>`](typings/function/AppendParameter.d.ts)
  - [`FunctionLike<T>`](typings/function/FunctionLike.d.ts)
  - [`NoInfer<T>`](typings/function/NoInfer.d.ts)
  - [`Promisable<T>`](typings/function/Promisable.d.ts)
  - [`PromiseReturnType<T>`](typings/function/PromiseReturnType.d.ts)
- Logical
  - [`And<X, Y>`](typings/logical/And.d.ts)
  - [`If<T, X, Y>`](typings/logical/If.d.ts)
  - [`Nand<X, Y>`](typings/logical/Nand.d.ts)
  - [`Nor<X, Y>`](typings/logical/Nor.d.ts)
  - [`Not<T>`](typings/logical/Not.d.ts)
  - [`Or<X, Y>`](typings/logical/Or.d.ts)
  - [`Xnor<X, Y>`](typings/logical/Xnor.d.ts)
  - [`Xor<X, Y>`](typings/logical/Xor.d.ts)
- Number
  - [`Absolute<N>`](typings/number/Absolute.d.ts)
  - [`Add<X, Y>`](typings/number/Add.d.ts)
  - [`BitAnd<X, Y>`](typings/number/BitAnd.d.ts)
  - [`BitLeftShift<N>`](typings/number/BitLeftShift.d.ts)
  - [`BitNot<N>`](typings/number/BitNot.d.ts)
  - [`BitOr<X, Y>`](typings/number/BitOr.d.ts)
  - [`BitRightShift<N>`](typings/number/BitRightShift.d.ts)
  - [`BitXor<X, Y>`](typings/number/BitXor.d.ts)
  - [`Compare<X, Y>`](typings/number/Compare.d.ts)
  - [`GreaterThan<X, Y>`](typings/number/GreaterThan.d.ts)
  - [`IsNegative<N>`](typings/number/IsNegative.d.ts)
  - [`LessThan<X, Y>`](typings/number/LessThan.d.ts)
  - [`Multiply<X, Y>`](typings/number/Multiply.d.ts)
  - [`ParseInt<S>`](typings/number/ParseInt.d.ts)
  - [`Range<X, Y>`](typings/number/Range.d.ts)
  - [`Sign<N>`](typings/number/Sign.d.ts)
  - [`Subtract<X, Y>`](typings/number/Subtract.d.ts)
  - [`Sum<X, Y>`](typings/number/Sum.d.ts)
- Object
  - [`Assign<T, U>`](typings/object/Assign.d.ts)
  - [`Compact<T>`](typings/object/Compact.d.ts)
  - [`DeepPartial<T>`](typings/object/DeepPartial.d.ts)
  - [`DeepReadonly<T>`](typings/object/DeepReadonly.d.ts)
  - [`Entries<T>`](typings/object/Entries.d.ts)
  - [`EnumOf<T, U>`](typings/object/EnumOf.d.ts)
  - [`ExclusiveOr<T, U>`](typings/object/ExclusiveOr.d.ts)
  - [`Expand<T>`](typings/object/Expand.d.ts)
  - [`ExtractReadonly<T>`](typings/object/ExtractReadonly.d.ts)
  - [`ExtractRequired<T>`](typings/object/ExtractRequired.d.ts)
  - [`InclusiveOr<T, K>`](typings/object/InclusiveOr.d.ts)
  - [`IntersectionOf<T>`](typings/object/IntersectionOf.d.ts)
  - [`Invert<T>`](typings/object/Invert.d.ts)
  - [`KeyBy<T, U>`](typings/object/KeyBy.d.ts)
  - [`Lookup<T, K>`](typings/object/Lookup.d.ts)
  - [`Mutable<T>`](typings/object/Mutable.d.ts)
  - [`NoneOrAll<T>`](typings/object/NoneOrAll.d.ts)
  - [`OmitAllBy<T, U>`](typings/object/OmitAllBy.d.ts)
  - [`OmitBy<T, U, K>`](typings/object/OmitBy.d.ts)
  - [`OmitDeep<T, K>`](typings/object/OmitDeep.d.ts)
  - [`OmitStrict<T, K>`](typings/object/OmitStrict.d.ts)
  - [`PickAllBy<T, U>`](typings/object/PickAllBy.d.ts)
  - [`PickBy<T, U, K>`](typings/object/PickBy.d.ts)
  - [`PickDeep<T, K>`](typings/object/PickDeep.d.ts)
  - [`PickRequired<T, K>`](typings/object/PickRequired.d.ts)
  - [`RecordOf<T>`](typings/object/RecordOf.d.ts)
- String
  - [`CamelCase<S>`](typings/string/CamelCase.d.ts)
  - [`ConstantCase<S>`](typings/string/ConstantCase.d.ts)
  - [`Delimit<S, U>`](typings/string/Delimit.d.ts)
  - [`Get<T, P>`](typings/string/Get.d.ts)
  - [`Length<S>`](typings/string/Length.d.ts)
  - [`PadEnd<S, N, T>`](typings/string/PadEnd.d.ts)
  - [`PadStart<S, N, T>`](typings/string/PadStart.d.ts)
  - [`PascalCase<S>`](typings/string/PascalCase.d.ts)
  - [`Path<T>`](typings/string/Path.d.ts)
  - [`PathParameters<S>`](typings/string/PathParameters.d.ts)
  - [`Printf<S>`](typings/string/Printf.d.ts)
  - [`Repeat<S, N>`](typings/string/Repeat.d.ts)
  - [`Replace<S, T, U>`](typings/string/Replace.d.ts)
  - [`ReplaceAll<S, T, U>`](typings/string/ReplaceAll.d.ts)
  - [`SliceString<S, X, Y>`](typings/string/SliceString.d.ts)
  - [`Split<S, U>`](typings/string/Split.d.ts)
  - [`SplitWith<S, U>`](typings/string/SplitWith.d.ts)
  - [`StrictPath<T>`](typings/string/StrictPath.d.ts)
  - [`Trim<S>`](typings/string/Trim.d.ts)
  - [`TrimEnd<S>`](typings/string/TrimEnd.d.ts)
  - [`TrimStart<S>`](typings/string/TrimStart.d.ts)
- Union
  - [`ExcludeStrict<T, U>`](typings/union/ExcludeStrict.d.ts)
  - [`ExtractStrict<T, U>`](typings/union/ExtractStrict.d.ts)
  - [`IsUnion<T>`](typings/union/IsUnion.d.ts)
  - [`LastType<T>`](typings/union/LastType.d.ts)
  - [`LiteralUnion<T, U>`](typings/union/LiteralUnion.d.ts)
  - [`Permutate<T>`](typings/union/Permutate.d.ts)
  - [`SymmetricDifference<T, U>`](typings/union/SymmetricDifference.d.ts)
  - [`UnionOf<T>`](typings/union/UnionOf.d.ts)
  - [`Typingsribute<T>`](typings/union/Typingsribute.d.ts)

[Aliases]: https://img.shields.io/badge/10-Aliases-FF9C9F?style=for-the-badge&labelColor=363C44
[Array]: https://img.shields.io/badge/18-Array-FEC98F?style=for-the-badge&labelColor=363C44
[Common]: https://img.shields.io/badge/6-Common-FEDD9E?style=for-the-badge&labelColor=363C44
[Function]: https://img.shields.io/badge/5-Function-B9E9AA?style=for-the-badge&labelColor=363C44
[Logical]: https://img.shields.io/badge/8-Logical-B9F9E6?style=for-the-badge&labelColor=363C44
[Number]: https://img.shields.io/badge/18-Number-B1F1F4?style=for-the-badge&labelColor=363C44
[Object]: https://img.shields.io/badge/26-Object-88C5FF?style=for-the-badge&labelColor=363C44
[String]: https://img.shields.io/badge/21-String-C7B4E0?style=for-the-badge&labelColor=363C44
[Union]: https://img.shields.io/badge/9-Union-F8CEEE?style=for-the-badge&labelColor=363C44
