import { ICoffe } from "../types/types";

class DeliveryItem {
  db: any;

  constructor(db: any) {
    this.db = db;
  }

  async getDeliveryItems() {
    try {
      // Referência da collection no banco
      const deliveryItemsRef = this.db.collection("delivery");
      // Query no banco
      const snapshot = await deliveryItemsRef.get();
      // Array dos itens que vão ser retornados do banco
      let deliveryItems: ICoffe[] = [];
      // ForEach passando pelos itens da query e adicionando no array
      snapshot.forEach((doc: any) => {
        deliveryItems.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      //Ao fim de tudo, retorna os Itens
      return deliveryItems;
    } catch (error) {
      console.error("Erro ao recuperar itens de entrega:", error);
      throw error;
    }
  }

  async createDeliveryItem(itemData: ICoffe) {
    try {
      // Referência da collection no banco
      const deliveryItemsRef = this.db.collection("delivery");
      //Verificando se existe o item no carrinho
      const querySnapshot = await deliveryItemsRef
        .where("id", "==", itemData.id)
        .get();
      //Caso exista o item no carrinho ele apenas soma a quantidade
      if (!querySnapshot.empty) {
        //Faz uma consulta no resultado da query acima, e pega o primeiro resultado, porque é oque interessa aqui
        const docRef = querySnapshot.docs[0].ref;
        // Pegamos os dados atuais do documento atual do firestore
        const docSnapshot = await docRef.get();
        // Extraimos os dados do documento
        const currentData = docSnapshot.data();
        // Update que queremos fazer no doc
        const updatedQuantity = currentData.quantity + itemData.quantity;
        // Por fim o update
        await docRef.update({ quantity: updatedQuantity });
      } else {
        // Caso não exista o documento, cria.
        await deliveryItemsRef.doc(itemData.id).set(itemData);
      }
    } catch (error) {
      console.error("Erro ao criar item de entrega:", error);
      throw error;
    }
  }
}

export default DeliveryItem;
