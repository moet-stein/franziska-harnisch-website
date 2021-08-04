import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import HometwoPreview from './preview-templates/HometwoPreview';
import WorkdetailsPostPreview from './preview-templates/WorkdetailsPostPreview';
import ExhibitionsPagePreview from './preview-templates/ExhibitionsPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import LinksPagePreview from './preview-templates/LinksPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('hometwo', HometwoPreview);
CMS.registerPreviewTemplate('workdetails', WorkdetailsPostPreview);
CMS.registerPreviewTemplate('exhibitions', ExhibitionsPagePreview);
CMS.registerPreviewTemplate('contactPage', ContactPagePreview);
CMS.registerPreviewTemplate('links', LinksPagePreview);

