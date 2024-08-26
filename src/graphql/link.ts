interface Args {
	disableAppearance?: boolean
	disableLabel?: boolean
}

export const LINK_FIELDS = ({ disableAppearance = false, disableLabel = false }: Args = {}): string => `{
  ${!disableLabel ? 'label' : ''}
  ${!disableAppearance ? 'appearance' : ''}
  type
  url
  newTab
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }        
    }
  }
}`

/**
Might need to add these as well.
...on Post {
	slug

}
...on Project {
        slug
      }   
	
 */
