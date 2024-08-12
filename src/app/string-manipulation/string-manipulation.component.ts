import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'string-manipulation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  templateUrl: './string-manipulation.component.html',
  styleUrls: ['./string-manipulation.component.scss'],
})
export class StringManipulationComponent {
  buttons = [
    { label: 'Uppercase Article' },
    { label: 'Lowercase Article' },
    { label: 'Capitalize Initial Character' },
    { label: 'Reverse Article' },
    { label: 'Remove Special Characters' },
    { label: 'Remove Numericals' },
    { label: 'Remove Spaces' },
    { label: 'Count Characters' },
    { label: 'Count Vowels And Consonants' },
    { label: 'Replace Words With New Word' },
    { label: 'Trim the whitespace from both ends' },
    { label: 'substring()' },
    { label: 'slice()' },
    { label: 'indexOf()' },
    { label: 'lastIndexOf()' },
    { label: 'split()' },
    { label: 'join()' },
    { label: 'includes()' },
    { label: 'startsWith()' },
    { label: 'endsWith()' },
    { label: 'repeat()' },
  ];

  showModal = false;
  isPopup = false;
  isPopupInclude = false;
  isUserEnterText = true;
  replaceform!: FormGroup;
  findForm!: FormGroup;
  inputString = '';
  transformedText: any;
  existingWord: any;
  newWord: any;
  enterWord: any;
  textTransformed: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.replaceform = this.fb.group({
      existingWord: ['', Validators.required],
      newWord: ['', Validators.required],
    });

    this.findForm = this.fb.group({
      enterWord: ['', Validators.required],
    });
  }

  reverse() {
    this.transformedText = this.inputString.split('').reverse().join('');
    this.openModal(this.transformedText);
  }

  capitalizeWords() {
    this.transformedText = this.inputString
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    this.openModal(this.transformedText);
  }

  toUpperCase() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText ? this.inputString.toUpperCase() : '';
    if (this.isUserEnterText) this.openModal(this.transformedText);
  }

  toLowerCase() {
    this.isUserEnterText = !!this.inputString;
    this.transformedText = this.isUserEnterText ? this.inputString.toLowerCase() : '';
    if (this.isUserEnterText) this.openModal(this.transformedText);
  }

  removeSpecialCharacters() {
    this.transformedText = this.inputString
      .split('')
      .filter(char => /[a-zA-Z0-9 ]/.test(char))
      .join('');
    this.openModal(this.transformedText);
  }

  removeNumerals() {
    this.transformedText = this.inputString
      .split('')
      .filter(char => char < '0' || char > '9')
      .join('');
    this.openModal(this.transformedText);
  }

  removeSpaces() {
    this.transformedText = this.inputString
      .split('')
      .filter(char => char !== ' ')
      .join('');
    this.openModal(this.transformedText);
  }

  countCharacters() {
    this.transformedText = this.inputString.length;
    this.openModal(this.transformedText);
  }

  countVowelsAndConsonants() {
    const vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (const char of this.inputString) {
      if (vowels.includes(char)) {
        vowelsCount++;
      } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        consonantsCount++;
      }
    }

    this.transformedText = { vowels: vowelsCount, consonants: consonantsCount };
    this.openModal(this.transformedText);
  }

  replace2() {
    this.isPopup = false;
    this.transformedText = this.inputString
      .split(this.existingWord)
      .join(this.newWord);
    this.openModal(this.transformedText);
  }

  include2() {
    this.isPopupInclude = false;
    this.transformedText = this.inputString.includes(this.enterWord);
    this.openModal(this.transformedText);
  }

  trim() {
    this.transformedText = this.inputString.trim();
    this.openModal(this.transformedText);
  }

  join() {
    const itemsArray = this.inputString
      .split(',')
      .map(item => item.trim());
    this.transformedText = itemsArray.join('; ');
    this.openModal(this.transformedText);
  }

  split() {
    this.transformedText = this.inputString.split(',');
    this.openModal(this.transformedText);
  }

  lastIndexOf() {
    const charIndex = this.inputString.lastIndexOf('.');
    this.transformedText = charIndex === -1 ? this.inputString : charIndex;
    this.openModal(this.transformedText);
  }

  indexOf() {
    const charIndex = this.inputString.indexOf('.');
    this.transformedText = charIndex === -1 ? this.inputString : charIndex;
    this.openModal(this.transformedText);
  }

  slice() {
    this.transformedText = this.inputString.slice(3, 5);
    this.openModal(this.transformedText);
  }

  substring() {
    const spaceIndex = this.inputString.indexOf(' ');
    this.transformedText = spaceIndex === -1
      ? this.inputString
      : this.inputString.substring(0, spaceIndex);
    this.openModal(this.transformedText);
  }

  replace() {
    this.isPopup = true;
  }

  includes() {
    this.isPopupInclude = true;
  }

  handleClick(buttonLabel: string): void {
    switch (buttonLabel) {
      case 'Uppercase Article':
        this.toUpperCase();
        break;
      case 'Lowercase Article':
        this.toLowerCase();
        break;
      case 'Capitalize Initial Character':
        this.capitalizeWords();
        break;
      case 'Reverse Article':
        this.reverse();
        break;
      case 'Remove Special Characters':
        this.removeSpecialCharacters();
        break;
      case 'Remove Numericals':
        this.removeNumerals();
        break;
      case 'Count Characters':
        this.countCharacters();
        break;
      case 'Remove Spaces':
        this.removeSpaces();
        break;
      case 'Count Vowels And Consonants':
        this.countVowelsAndConsonants();
        break;
      case 'Replace Words With New Word':
        this.replace();
        break;
      case 'Trim the whitespace from both ends':
        this.trim();
        break;
      case 'substring()':
        this.substring();
        break;
      case 'slice()':
        this.slice();
        break;
      case 'indexOf()':
        this.indexOf();
        break;
      case 'lastIndexOf()':
        this.lastIndexOf();
        break;
      case 'split()':
        this.split();
        break;
      case 'join()':
        this.join();
        break;
      case 'includes()':
        this.includes();
        break;
      default:
        console.log(`No action defined for ${buttonLabel}`);
        break;
    }
  }

  openModal(textTransformed: any) {
    this.textTransformed = textTransformed;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.isPopup = false;
  }

  textClear() {
    this.inputString = '';
  }

  submit() {
    this.existingWord = this.replaceform.value.existingWord;
    this.newWord = this.replaceform.value.newWord;
    this.replace2();
  }

  find() {
    this.enterWord = this.findForm.value.enterWord;
    this.include2();
  }
}
