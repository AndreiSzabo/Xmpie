import {commonMethods} from "../common/commonMethods";
import {queriesMass} from "../data/constants/queriesMassConst.json"
import {topCitiesByOpens} from "../data/selectors/queriesMass.json"

export class QueriesMassPage {
    navigateToQueriesMassPage() {
        commonMethods.setCrossOriginUncaughtErrorFalse();
        commonMethods.visitPage(queriesMass.ULR);
        commonMethods.assertUserIsRedirectedToExpectedPage(queriesMass.ULR);
    }

    assertIndianapolisIsPresentInList() {
        commonMethods.assertElementContainsExpectedText(topCitiesByOpens.TOP_CITIES_BY_OPENS_LIST, queriesMass.INDIANAPOLIS);
    }

    assertIndianapolisOpens() {
        commonMethods.assertElementContainsExpectedText(topCitiesByOpens.TOP_CITIES_INDIANAPOLIS_OPENS, queriesMass.INDIANAPOLIS_OPENS);
    }

    assertIndianapolisPercentage() {
        commonMethods.assertElementContainsExpectedText(topCitiesByOpens.TOP_CITIES_INDIANAPOLIS_PERCENTAGE, queriesMass.INDIANAPOLIS_PERCENTAGE);
    }

    assertIndianapolisRowContainsExpectedData() {
        this.assertIndianapolisIsPresentInList();
        this.assertIndianapolisOpens();
        this.assertIndianapolisPercentage();
    }
}

export const queriesMassPage = new QueriesMassPage();