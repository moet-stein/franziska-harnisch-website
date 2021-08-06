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

CMS.registerPreviewTemplate('aboutde', AboutPagePreview);
CMS.registerPreviewTemplate('abouten', AboutPagePreview);
CMS.registerPreviewTemplate('hometwode', HometwoPreview);
CMS.registerPreviewTemplate('hometwoen', HometwoPreview);
CMS.registerPreviewTemplate('workdetailsde', WorkdetailsPostPreview);
CMS.registerPreviewTemplate('workdetailsen', WorkdetailsPostPreview);
CMS.registerPreviewTemplate('exhibitionsde', ExhibitionsPagePreview);
CMS.registerPreviewTemplate('exhibitionsen', ExhibitionsPagePreview);
CMS.registerPreviewTemplate('contactPagede', ContactPagePreview);
CMS.registerPreviewTemplate('contactPageen', ContactPagePreview);
CMS.registerPreviewTemplate('linksde', LinksPagePreview);
CMS.registerPreviewTemplate('linksen', LinksPagePreview);

