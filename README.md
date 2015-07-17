# Keystone Images
Discussion and Docs on approach for image picker for Keystone TinyMCE Rich Text Editor.

Currently, the plan is to work on the ["Cloudinary+" approach listed in OPTIONS.md](OPTIONS.md).

## Structure
There are two main parts:

1. Editor inclusion (RTE)
2. Field for managing any files & images long-term. 

In the Editor, there will be insertion & uploading of Images and of Files.

For the managing of files, we need to be able to see what files are uploaded and optionally allow further uploads here.

## Internal Resources

For further discussion, see other files:
- [Source Code Notes and Breadcrumbs](SOURCE-NOTES.md) 
- [OPTIONS.md](OPTIONS.md)
- [Lionite Images plugin review](lionite-images/15-07-JP-Review.md): interesting to see a simple plugin setup.

## Keystone Code, Issues, and PRs

The below are helpful items scattered across the keystone codebase and github project:
- [Elemental UI](https://github.com/elementalui/elemental)
 - This is where the action is currently, building new React based admin elements.

- [File Fields, PR #1222](https://github.com/keystonejs/keystone/pull/1222)
 - The work is in the file-fields branch which may have been complete or near when last it was touched in late April, 2015. (See [creyners comment Mar 26](https://github.com/keystonejs/keystone/pull/1222#issuecomment-86541326) with a checklist).
 - Currently, [the file-fields branch](https://github.com/keystonejs/keystone/tree/file-fields) is 223 commits behind master.   

- [uploadcar image field type, PR #1510](https://github.com/keystonejs/keystone/pull/1510)
 - Interesting as an example of adding a new image FieldType whole-cloth.

- Similarly, [S3Files Field, PR #1362](https://github.com/keystonejs/keystone/pull/1362)
 - Got stalled behind file-fields work.
 - Appears to take a similar approach as other "files" Fields and just extends to allow multiple S3Files in a single field of a model.

- [KeystoneJS/storage / "storage.js"](https://github.com/keystonejs/storage)
 - See also [Issue #526](https://github.com/keystonejs/keystone/issues/526)
 - Reviewed notes: ["/storage.js"](https://github.com/jeffreypriebe/keystone-images-docs/tree/master/Storage.js)
