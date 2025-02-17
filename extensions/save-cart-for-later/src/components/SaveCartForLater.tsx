import {
  useCartLines,
  Button,
  Checkbox,
  Text,
  BlockStack,
  InlineStack,
} from "@shopify/ui-extensions-react/checkout";
import React, { useState } from "react";

const SaveCartForLater = () => {
  const cartLines = useCartLines();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSaveCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cart/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: selectedItems }),
      });

      if (response.ok) {
        console.log("Cart saved successfully!");
      } else {
        console.error("Failed to save cart.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BlockStack spacing="loose">
      <Text size="large" emphasis="bold">
        Save your cart
      </Text>
      <BlockStack spacing="tight">
        {cartLines.map((line) => (
          <InlineStack key={line.id} spacing="base">
            <Checkbox
              accessibilityLabel={line.merchandise.title}
              checked={selectedItems.includes(line.id)}
              onChange={() => handleCheckboxChange(line.id)}
            />
            <Text appearance="subdued">
              {line.quantity} x {line.cost.totalAmount.amount}
            </Text>
          </InlineStack>
        ))}
      </BlockStack>
      <Button onPress={handleSaveCart} kind="primary">
        Save
      </Button>
    </BlockStack>
  );
};

export default SaveCartForLater;
