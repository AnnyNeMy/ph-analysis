import { OneOneMethodConfig } from "@/models/OneOneMethodConfig";
import { OneOneMethodConfigCollections } from "@/models/OneOneMethodConfigCollections";

export class GetMethodsDataHelper {

public static getOneOneMethodConfig(configCollections: OneOneMethodConfigCollections): OneOneMethodConfig {
    let methodConfig = new OneOneMethodConfig();
    methodConfig.method = configCollections?.methods && configCollections.methods[0];
    methodConfig.stock = configCollections?.groupsStocks && configCollections.groupsStocks[0];
    methodConfig.filterTypeName = configCollections?.filterTypeNames && configCollections.filterTypeNames[0];
    methodConfig.bond = configCollections?.bonds && configCollections.bonds[0];
    methodConfig.timeFrameName = configCollections?.timeFrameNames && configCollections.timeFrameNames[0];
    methodConfig.n1Value = configCollections?.сoeffConfig && configCollections.сoeffConfig.n1Value;
    methodConfig.n2Value = configCollections?.сoeffConfig && configCollections.сoeffConfig.n2Value;
    methodConfig.n3Value = configCollections?.сoeffConfig && configCollections.сoeffConfig.n3Value;
    methodConfig.kUpValue = configCollections?.сoeffConfig && configCollections.сoeffConfig.kUpValue;
    methodConfig.kDownValue = configCollections?.сoeffConfig && configCollections.сoeffConfig.kDownValue;
    methodConfig.additionalVaiableValue = configCollections?.сoeffConfig && configCollections.сoeffConfig.additionalVaiableValue;
    return methodConfig;
} 
}