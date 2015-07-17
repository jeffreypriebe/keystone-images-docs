# Lionite

Looking for other plugins, found this image plugin:
- http://www.binpress.com/app/tinymce-image-uploader-manager/23/comments
- http://demo.lionite.com/image/mce417

The plugin.js is more or less what it uses for a plugin.

What is interesting is how the insight into how TinyMCE plugins work, reading besides all the TinyMCE plugin API stuff,
[@ L18](plugin.js#L18) it tells TinyMCE to launch a frame with a [static HTML file (lioniteimages.htm)](lioniteimages.htm) in it.

In that file, the #lionite-gallery gets populated with images from an AJAX call to gallery.php (lionite's script that simply shows the images in a given folder, one would presume).

Which suggests that a simple html page with some script can function as the target of a TinyMCE plugin/command button.
This doesn't say anything about how the keystone React setup works.

In the [lioniteimages.htm](lioniteimages.htm#L20) file, [lioniteimages.js](lioniteimages.js#L63) is included which makes a call back to `parentEditor.insertContent('url')` - presumably the API of TinyMCE waiting in the parent to recieve the selected image.