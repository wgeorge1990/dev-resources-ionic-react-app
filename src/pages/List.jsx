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
  IonImg,
  IonSearchbar
  
} from '@ionic/react';
// import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons';
import React, {useState} from 'react';
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
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const [searchTerm, setSearchTerm] = useState('')
    const searchedResources = props.resources.filter(resource => resource.description.toLowerCase().includes(searchTerm))
    console.log(searchedResources)
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className='toolbar-resources-text'>
            Resources
            </IonTitle>
        </IonToolbar>
        <IonSearchbar value={searchTerm} onIonChange={handleSearch} />
      </IonHeader>
      <IonContent className="work" color="egghead-tint">
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {searchedResources.map(resource => {
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
                      <a href={`${resource.url}`} target="_blank">{resource.url}</a>
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