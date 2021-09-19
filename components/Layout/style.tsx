import styled from 'styled-components'

export const StyledContainerLayout = styled.div`
    * {
        -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
        color-adjust: exact !important; /*Firefox*/

        hr {
            opacity: unset;
        }
    }

    @page {
        size: a4;
        margin-bottom: 30mm !important;
    }
`
