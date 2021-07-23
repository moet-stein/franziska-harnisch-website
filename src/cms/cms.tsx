import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import EventPagePreview from './preview-templates/EventPagePreview';
import LauraTestPreview from './preview-templates/LauraTestPreview';
import TestMoePagePreview from './preview-templates/TestMoePagePreview';
import HometwoPreview from './preview-templates/HometwoPreview';
import WorkdetailsPostPreview from './preview-templates/WorkdetailsPostPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('events', EventPagePreview);
CMS.registerPreviewTemplate('lauratest', LauraTestPreview);
CMS.registerPreviewTemplate('testMoe', TestMoePagePreview);
CMS.registerPreviewTemplate('hometwo', HometwoPreview);
CMS.registerPreviewTemplate('workdetails', WorkdetailsPostPreview);

