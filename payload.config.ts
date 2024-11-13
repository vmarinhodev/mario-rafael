import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmission';
import Study from './collections/Study';
import Category from './collections/Category';
import MegaMenu from './globals/megaMenu';
import Footer from './globals/footer';
import SocialMedia from './globals/socialMedia';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Study,
    Media,
    FormSubmission,
    Category,
  ],
  globals: [
    MegaMenu,
    SocialMedia,
    Footer,
  ],
});
