### When to use 'show' prop and when not to use it ?

In these basic scenarios there is no real difference between these 2 ways of doing the same thing.

But there are 3 scenarios that make the difference:
1. Nesting Animations (Animation inside animation) will only work by using the 'show' prop.
2. Adding multiple children is easier without the 'show' prop (you just add or remove the children and it animates).
3. Mounting and unmounting simultaneously children is only possible without the 'show' prop.
