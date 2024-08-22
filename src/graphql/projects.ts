import { META_FIELDS } from '@graphql/meta'
import {
	CALL_TO_ACTION_BLOCK,
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK,
	IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK,
	TABS_BLOCK,
} from '@graphql/blocks'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'

export const PROJECTS = `
  query Projects {
	Projects(limit: 300) {
	  docs {
		slug
	  }
	}
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean) {
	Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
	  docs {
		id
		title
		categories {
		  title
		}
		createdAt
		hero {
		  type
		  richText
		  links {
			link ${LINK_FIELDS()}
		  }
		  ${MEDIA}
		}
		layout {
		  ${CONTENT}
		  ${CALL_TO_ACTION}
		  ${CONTENT}
		  ${MEDIA_BLOCK}
		  ${ARCHIVE_BLOCK}
		}
		relatedProjects {
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
