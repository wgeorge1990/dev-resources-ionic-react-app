import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonThumbnail,
  // IonIcon,
  IonItem,
  IonLabel,
  // IonList,
  // IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonReorder,
  IonReorderGroup,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonChip,
  IonAvatar,
  IonImg
  } from '@ionic/react';
// import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { useState, useEffect } from 'react'
import './Home.css';

const HomePage = (props) => {
  //Hooks
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  //Input onChanges
  const onUrlChange = (event) => {
    setUrl(event.target.value)
  }
  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const onDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const doReorder = (event) => {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    // console.log('Dragged from index', event.detail.from, 'to', event.detail.to);
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Development Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/Embedded-Software-Engineering.jpeg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Development Resources</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
             Your one stop show for saving and sharing resources to help you with your next programming adventure.
            </p>
          </IonCardContent>
          <IonItem>
            <IonInput
              placeholder="Resource Url"
              autofocus={true}
              clearInput={true}
              required={true}
              name="url"
              onIonChange={onUrlChange}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              placeholder="Description"
              autofocus={true}
              clearInput={true}
              required={true}
              name="Description"
              onIonChange={onDescriptionChange}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Category || Technology</IonLabel>
            <IonSelect
              placeholder="Select One"
              name="category"
              onIonChange={onCategoryChange}>
              <IonSelectOption value="react">React</IonSelectOption>
              <IonSelectOption value="javascript">JavaScript</IonSelectOption>
              <IonSelectOption value="ruby">Ruby</IonSelectOption>
              <IonSelectOption value="rails">Rails</IonSelectOption>
              <IonSelectOption value="go">Go</IonSelectOption>
              <IonSelectOption value="css">CSS</IonSelectOption>
              <IonSelectOption value="semantic-ui">Semantic-ui</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonButton
              expand="full"
              size="default"
              color="tertiary"
              onClick={(e) => props.onFormSubmit(e, url, category, description)}>
              Add Resource
            </IonButton>
          </IonItem>
        </IonCard>

        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {props.resources.map(resource => {
            return (
              <IonReorder key={resource.id}>
                <IonCard className="IonCard" key={resource.id}>
                    <IonCardHeader>
                    <IonCardSubtitle className="IonCardSubtitle"> 
                      
                    </IonCardSubtitle>
                    <IonThumbnail >
                      <IonImg src={require("../images/download.png")} className="IonThumbnail" />
                    </IonThumbnail>
                    <IonCardTitle
                      className="IonCardTitle">
                      <h1>{resource.url}</h1></IonCardTitle>
                    
                  </IonCardHeader>
                  <IonCardContent className="IonCardContent">
                   
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

export default HomePage;
