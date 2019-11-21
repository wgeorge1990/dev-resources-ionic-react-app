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
  IonImg,
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
    <IonPage >
      <IonHeader className="IonHeader" >
        <IonToolbar className="IonToolbar">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
            <IonTitle className='app-title'>Development Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="IonContent" color="egghead">
        <IonCard className="welcome-card" >
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

export default HomePage;
