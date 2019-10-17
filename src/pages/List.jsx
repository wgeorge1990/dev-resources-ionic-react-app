import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonReorderGroup,
  IonLabel,
  IonReorder,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
  
} from '@ionic/react';
// import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';

const doReorder = (event) => {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  // console.log('Dragged from index', event.detail.from, 'to', event.detail.to)
  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

const ListPage = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {props.resources.map(resource => {
            return (
              <IonReorder key={resource.id}>
                {/* Key is temporary until data is comming from the database and can use id for key */}
                <IonCard key={resource.id}>
                  <IonCardHeader>
                    <IonCardSubtitle>{resource.category}</IonCardSubtitle>
                    <IonCardTitle>{resource.url}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {resource.description}
                  </IonCardContent>
                </IonCard>
              </IonReorder>
            )
          })}
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};
export default ListPage