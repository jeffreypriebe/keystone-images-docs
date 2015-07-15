storage.js notes 15-07-15
https://github.com/keystonejs/storage

Added it to test via package.json ("storage": "git://github.com/keystonejs/storage") then npm install
n.b. was at e063f783c1212cea573678bed2b91a0afcb4aaff Sept 24, 2014 (matching v.0.0.1 tag, no other branches)

It's old and single committer. Not good signs.
But we're here to plunder code and also to learn how to integrate KSJS (KeystoneJS)

Heavy (since it has to reference all possible providers)
Wish these were pluggable. (npm install has to node_gyp various dependencies)

On usage in Keystone, note: https://github.com/keystonejs/keystone/issues/526

Have it setup on keystone start - but can't find how to include it.
- Neither as a new type (I don't see any Field/Type code, not even here: https://github.com/grabbou/keystone/tree/feature-storage)
- Or as a button on TinyMCE

<small>(Given the age of this work vis a vis React components for Admin UI, it's likely that this wouldn't have been in React anyways.)</small>

I can't find a hint as to how the author intended this to be plugged into Keystone.
From [Issue#526](https://github.com/keystonejs/keystone/issues/526), maybe he meant for it to just be the new "Image" - but I don't see that code anywhere either.

So, this repo could be a source of "how to work with provider X"
But there is no UI (which is hard-ish for what we want to do).
And there is no "how to integrate with Keystone" (which is a big question that we have).

I'm done reviewing this. Nothing terribly useful here. Dissapointing.

Resources:

1. https://github.com/keystonejs/storage
2. https://github.com/keystonejs/keystone/issues/526
3. https://github.com/keystonejs/storage/issues/16
4. https://github.com/keystonejs/storage/tree/master/examples 