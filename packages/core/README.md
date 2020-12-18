# `@surikiri/core`

TypeScirpt typing is now available for `normalizer`.

## Usage
https://codesandbox.io/s/typed-normalizer-0uk4f

```typescript
import { createEntity, Entity, normalize } from "@surikiri/core";
import { v4 } from "uuid";

type User = {
  firstName: string;
  lastName: string;
} & Entity<"users">;
const userEntity = createEntity<User>("users", {});
type Family = {
  mother: User | null;
  father: User | null;
  children: User[];
} & Entity<"families">;
const familyEntity = createEntity<Family>("families", {
  mother: userEntity,
  father: userEntity,
  children: [userEntity],
});
const user1: User = {
  id: "user1",
  firstName: "user1",
  lastName: "huga",
};
const user2: User = {
  id: "user2",
  firstName: "user2",
  lastName: "hoge",
};
const families: Family[] = [
  {
    id: v4(),
    mother: null,
    father: null,
    children: [],
  },
  {
    id: v4(),
    mother: user1,
    father: null,
    children: [user1, user2],
  },
  {
    id: v4(),
    mother: null,
    father: user2,
    children: [],
  },
];

const { result, entities } = normalize(families, [familyEntity]);
console.log(result, entities);
```
