import { ICoffe } from "../types/types";

class DeliveryItem {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getDeliveryItems() {
    try {
      const deliveryItemsRef = this.db.collection("delivery");
      const snapshot = await deliveryItemsRef.get();

      let deliveryItems: ICoffe[] = [];
      snapshot.forEach((doc: any) => {
        deliveryItems.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return deliveryItems;
    } catch (error) {
      console.error("Erro ao recuperar itens de entrega:", error);
      throw error;
    }
  }

  async createDeliveryItem(itemData: ICoffe) {
    try {
      const deliveryItemsRef = this.db.collection("delivery");
      await deliveryItemsRef.add(itemData);
    } catch (error) {
      console.error("Erro ao criar item de entrega:", error);
      throw error;
    }
  }
}

export default DeliveryItem;
