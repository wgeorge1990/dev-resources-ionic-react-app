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

const HomePage: React.FC = (props) => {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState('')
  const [resources, addResource] = useState({})
  console.log(count)

  const submit = (event) => {
    console.log(event.target.value)
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
              onIonChange={submit}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Category || Technology</IonLabel>
            <IonSelect placeholder="Select One">
              <IonSelectOption value="React">React</IonSelectOption>
              <IonSelectOption value="m">JavaScript</IonSelectOption>
              <IonSelectOption value="m">Ruby</IonSelectOption>
              <IonSelectOption value="m">Rails</IonSelectOption>
              <IonSelectOption value="m">Go</IonSelectOption>
              <IonSelectOption value="m">CSS</IonSelectOption>
              <IonSelectOption value="m">Semantic-ui</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonButton
              size="small"
              onClick={() => setCount(count + 1)}>
              Add Resource
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
