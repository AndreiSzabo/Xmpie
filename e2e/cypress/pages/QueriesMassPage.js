import {commonMethods} from "../common/commonMethods";
import {queriesMass} from "../data/constants/queriesMassConst.json"
import {topCitiesByOpens} from "../data/selectors/queriesMass.json"

export class QueriesMassPage {
    navigateToQueriesMassPage() {
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.visitPage(queriesMass.ULR);
        commonMethods.assertUserIsRedirectedToExpectedPage(queriesMass.ULR);
    }

    assertCitiesByOpens(City, NumOfOpens, NumOfPercentages) {
        cy.contains(topCitiesByOpens.TOP_CITIES_BY_OPENS_LIST, City)
            .within(() => {
                cy.get(topCitiesByOpens.OPENS).first().should("have.text", NumOfOpens)
                cy.get(topCitiesByOpens.PERCENTAGE).last().should("have.text", NumOfPercentages)
            });
    }
}

export const queriesMassPage = new QueriesMassPage();