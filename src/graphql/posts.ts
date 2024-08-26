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

export const POSTS = `
  query Posts {
	Posts(limit: 300) {
	  docs {
		slug
	  }
	}
  }
`

export const POST = `
  query Post($slug: String, $draft: Boolean) {
	Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
	  docs {
		id
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
			links {
				link ${LINK_FIELDS()}
			}
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
		relatedPosts {
		  id
		  slug
		  title
		  ${META_FIELDS}
		}
		${META_FIELDS}
	  }
	}
  }
`
