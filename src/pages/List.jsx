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
  IonCardSubtitle,
  IonThumbnail,
  IonImg
  
} from '@ionic/react';
// import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React from 'react';
import './List.css';

const doReorder = (event) => {
  // The `from` and `to` properties contain the index of the item
  // when the drag started and ended, respectively
  // console.log('Dragged from index', event.detail.from, 'to', event.detail.to)
  // Finish the reorder and position the item in the DOM based on
  // where the gesture ended. This method can also be called directly
  // by the reorder group
  event.detail.complete();
}

const Resources = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="work" color="egghead-tint">
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {props.resources.map(resource => {
            return (
                <IonCard className="IonCard" key={resource.id}>
                  <IonItem>
                    <IonThumbnail slot="start">
                      <IonImg src={require("../images/download.png")} />
                    </IonThumbnail>
                    <IonLabel>
                      <h3>
                        {resource.description}
                      </h3>
                      <p>
                        {resource.url}
                      </p>
                      <p>
                        {resource.category}
                      </p>
                  </IonLabel>
                    <IonReorder key={resource.id} slot="end" />
                  </IonItem>
                </IonCard>
            )
          })}
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};
export default Resources