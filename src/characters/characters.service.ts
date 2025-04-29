import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { firestore } from 'firebase-admin';
import { Character, HealthPoint } from './entities/character.entity';

import DocumentSnapshot = firestore.DocumentSnapshot;
import QuerySnapshot = firestore.QuerySnapshot;

@Injectable()
export class CharactersService {
  private collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>

  constructor() {
    this.collection = firestore().collection('characters');
  }

  async create(createCharacterDto: CreateCharacterDto) {
    const character: Omit<Character, 'id' > = {
      ...createCharacterDto,
      health: Array(createCharacterDto.maxHealth).fill(HealthPoint.Healthy), // full health at the beginning
      willpower: createCharacterDto.maxWillpower,
      integrity: createCharacterDto.maxIntegrity,
      beats: 0,
      experience: 0
    }

    return this.collection.add(character).then(doc => {
      return { id: doc.id, ...character };
    });
  }

  findAll() {
    return this.collection
      .get()
      .then((querySnapshot: QuerySnapshot<Character>) => {
        if(querySnapshot.empty) {
          return [];
        }

        const characters: Character[] = [];
        for(const doc of querySnapshot.docs) {
          characters.push(this.transformCharacter(doc) as Character)
        }

        return characters;
      });
  }

  findOne(id: string) {
    return this.collection
      .doc(id)
      .get()
      .then((querySnapshot: DocumentSnapshot<Character>) => {
        return this.transformCharacter(querySnapshot);
      })
  }

  async update(id: string, updateCharacterDto: UpdateCharacterDto) {
    await this.collection.doc(id).set(updateCharacterDto, { merge: true });
  }

  async remove(id: string) {
    await this.collection.doc(id).delete();
  }

  private transformCharacter(querySnapshop: DocumentSnapshot<Character>) {
    if(!querySnapshop.exists) {
      throw new Error('no characters found for given id');
    }

    const character = querySnapshop.data();

    return {
      id: querySnapshop.id,
      ...character
    }
  }


}
