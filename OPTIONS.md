### "Cloundinary+"
The idea of using Cloundinary for Images is very attractive. It has a nice upload & insertion and provides a resizing as needed ("transformations") as well as using a CDN by default.
While not perfect, it does a lot of useful things right away.

What it does lack is any sort of "viewing existing files" - which would require both a change to the current uploading mechanism (to allow for selection from existing files and also for controlling the upload folder/path).

Cloundinary also does not handle non-image files<sup>[1](OPTIONS.md#user-content-fn1)</sup>.

RTE Insertion:
- Modify Cloudinary TinyMCE plugin to upload to a known path (per page).
- Modify Cloudinary plugin to allow selection of images. (So an upload now adds a file to the path, but doesn't automatically select it.)

Files:
- Use a similar approach as cloundinary, but do the uploading to Amazon S3 directly.
- [To Start] Leave the files and images entirely separate, there is no sharing of folders/paths nor of the insertion. All is separate.

Viewing:
- Use the Gallery Model from the yeoman generator as a base.
- Modify the CloundinaryImages to view existing paths that are shared with the RTE Insertion.
- Auto-create the "galleries" so that each Gallery is a path.
 - Would require hooks on any model that can create folder paths.

##### Future
Again, Files, separate from Images. So similar approach for Files, but folders mapping to Amazon S3 paths. 

Some future version unifies these and cloudinary or not, paths/folders are shared and can contain mixed content.
A further future version removes cloudinary from the mix entirely if desired (then resizing, thumbnails, and any other images transformations are required).





###### Footnotes
1. <a name="fn1"></a>It will accept PDFs, but it appears to treat those as images and doesn't accept just random files.