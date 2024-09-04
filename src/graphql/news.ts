import { META_FIELDS } from '@graphql/meta'
import {
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK,
	IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK,
	TABS_BLOCK,
} from '@graphql/blocks'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'

export const NEWSARCHIVE = `
  query News {
	News(limit: 300) {
	  docs {
		slug
	  }
	}
  }
`

export const NEWS = `
  query News($slug: String, $draft: Boolean) {
	News(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
	  docs {
		title
		thumbnail ${MEDIA_FIELDS}
		categories {
		  title
		}
		createdAt
		pageHead {
			type
			subhead
			title
			content
			
			media ${MEDIA_FIELDS}
		}
		layout {
		  
		  ${CARDS_BLOCK}
		  ${CONTACT_FORM_BLOCK}
		  ${IMAGE_SLIDER_BLOCK}
		  ${MEDIA_AND_CONTENT_BLOCK}		
		  ${MEDIA_BLOCK}
		  ${TABS_BLOCK}		
		}
		relatedNews {
		  slug
		  title
		}
	  }
	}
  }
`
