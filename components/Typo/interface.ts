type ContentTypes = 'content1'|'content2'|'content3'|'content4'|'content5'

type TitleTypes = 'title1'|'title2'

export interface Props {
    type: TitleTypes | ContentTypes;
}