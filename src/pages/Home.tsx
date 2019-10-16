import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton
  } from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { useState } from 'react'
import './Home.css';

const HomePage: React.FC = () => {
  //Hooks
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')
  const [resources, addResource] = useState([])

  //Input onChanges
  const onUrlChange = (event) => {
    setUrl(event.target.value)
  }
  const onCategoryChange = (event) => {
    setCategory(event.target.value)
  }
  //Submit form
  const onFormSubmit = () => {
    let newResource = { "url": url, "category": category }
    addResource([...resources, newResource])
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
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
              size="small"
              onClick={onFormSubmit}>
              Add Resource
            </IonButton>
          </IonItem>
        </IonCard>

        {resources.map(resource => {
          return (
            <IonItem >
              <div className="item-note" slot="end">
                {resource.url}
              </div>
            </IonItem>
          )
        })}
        
        
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
