import {
  reactExtension,
  Banner,
  BlockStack,
} from "@shopify/ui-extensions-react/checkout";

import SaveCartForLater from "./components/SaveCartForLater";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  return (
    <>
    <BlockStack border={"dotted"} padding={"tight"}>
      <Banner title="save-cart-for-later">Good luck with your assignment!</Banner>
    </BlockStack>

    <BlockStack border={"dotted"} padding={"tight"}>
      <SaveCartForLater />
    </BlockStack>

    </>
  );
}
