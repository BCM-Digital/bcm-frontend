import { META_FIELDS } from '@graphql/meta'
import {
	CALL_TO_ACTION_BLOCK,
	CARDS_BLOCK,
	CONTACT_FORM_BLOCK, IMAGE_SLIDER_BLOCK,
	MEDIA_AND_CONTENT_BLOCK,
	MEDIA_BLOCK, QUESTIONS_BLOCK, TABS_BLOCK,
} from '@graphql/blocks'
import { LINK_FIELDS } from '@graphql/link'
import { MEDIA_FIELDS } from '@graphql/media'

export const PAGES = `
  query Pages {
    Pages(limit: 300) {
      docs {
        slug
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String ) {
    Pages(where: { slug: { equals: $slug} }, draft: true) {
      docs {
        id
        title
        pageHead {
        	type
        	breadcrumb
        	title
        	content
        	links {
        		link ${LINK_FIELDS()}
        	}
        	media ${MEDIA_FIELDS}
        }
        layout {
        	${CALL_TO_ACTION_BLOCK}
        	${CARDS_BLOCK}
        	${CONTACT_FORM_BLOCK}
        	${IMAGE_SLIDER_BLOCK}
        	${MEDIA_AND_CONTENT_BLOCK}		
        	${MEDIA_BLOCK}
        	${QUESTIONS_BLOCK}
        	${TABS_BLOCK}		
        }
        meta ${META_FIELDS}
        breadcrumbs {
          url
          label
        }
      }
    }
  }
`
