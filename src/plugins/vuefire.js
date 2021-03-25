import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import firebase from 'firebase/app'
import 'firebase/firestore'

export const dbFirestore = firebase
    .initializeApp({ projectId: 'sustantiva-1b06b' })
    .firestore()

Vue.use(firestorePlugin)