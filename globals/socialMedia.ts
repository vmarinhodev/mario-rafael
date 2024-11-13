import { GlobalConfig } from 'payload/types';

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  fields: [
    {
      name: 'row',
      label: 'Social Media',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SocialMedia;
