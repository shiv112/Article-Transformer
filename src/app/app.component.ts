import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StringManipulationComponent } from './string-manipulation/string-manipulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    StringManipulationComponent,
    MatSidenavModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttons = [
    { label: "Uppercase Article" },
    { label: "Lowercase Article" },
    { label: "Capitalize Initial Character" },
    { label: "Reverse Article" },
    { label: "Remove Special Characters" },
    { label: "Remove Numericals" },
    { label: "Remove Spaces" },
    { label: "Count Characters" },
    { label: "Count Vowels And Consonants" },
    { label: "Replace Words With New Word" },
    { label: "Trim the whitespace from both ends" },
    { label: "substring()" },
    { label: "slice()" },
    { label: "indexOf()" },
    { label: "lastIndexOf()" },
    { label: "split()" },
    { label: "join()" },
    { label: "includes()" },
    { label: "startsWith()" },
    { label: "endsWith()" },
    { label: "repeat()" }
];

showModal: boolean = false;
isPopup: boolean = false;
isPopupInclude: boolean = false;
replaceform!: FormGroup;
findForm!: FormGroup;
inputString: string = "";
transformedText: any;
existingWord: any;
newWord: any;
enterWord: any;
textTransformed: any;

constructor(private fb: FormBuilder) {}

ngOnInit() {
    this.replaceform = this.fb.group({
        existingWord: ["", Validators.required],
        newWord: ["", Validators.required]
    });

    this.findForm = this.fb.group({
        enterWord: ["", Validators.required]
    });
}

reverse() {
    this.transformedText = this.inputString
        .split("")
        .reverse()
        .join("");
    this.openModal(this.transformedText);
}

capitalizeWords() {
    this.transformedText = this.inputString
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");

    this.openModal(this.transformedText);
}

toUpperCase() {
    this.transformedText = this.inputString.toUpperCase();
    this.openModal(this.transformedText);
}

toLowerCase() {
    this.transformedText = this.inputString.toLowerCase();
    this.openModal(this.transformedText);
}

removeSpecialCharacters() {
    this.transformedText = this.inputString.replace(/[^a-zA-Z0-9 ]/g, "");

    this.openModal(this.transformedText);
}

removeNumerals() {
    let result = "";
    for (let i = 0; i < this.inputString.length; i++) {
        if (this.inputString[i] < "0" || this.inputString[i] > "9") {
            result += this.inputString[i];
        }
    }
    this.transformedText = result;

    this.openModal(this.transformedText);
}

removeSpaces() {
    this.transformedText = this.inputString.replace(/\s+/g, "");

    this.openModal(this.transformedText);
}

countCharacters() {
    this.transformedText = this.inputString.length;
    this.openModal(this.transformedText);
}
countVowelsAndConsonants() {
    // ---------------without built in function------------------------------------

    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < this.inputString.length; i++) {
        const char = this.inputString[i];
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
            consonantsCount++;
        }
    }

    // ------------------with built in function------------------------------

    // const vowelsList = 'aeiouAEIOU';

    // const vowelsCount = this.inputString.split('').filter((char) => vowelsList.includes(char)).length;

    // const consonantsCount = this.inputString.split('').filter((char) => char.match(/[a-z]/i) && !vowelsList.includes(char)).length;

    // return { vowels: vowelsCount, consonants: consonantsCount };

    this.transformedText = {
        vowels: vowelsCount,
        consonants: consonantsCount
    };

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
    //input---->  shivam,sahu,angular,developer
    // output-->  shivam; sahu; angular; developer

    // Split the input string by commas into an array
    const itemsArray: string[] = this.inputString
        .split(",")
        .map(item => item.trim());
    // Join the array elements with a semicolon
    const formattedList: string = itemsArray.join("; ");
    this.transformedText = formattedList;
    this.openModal(this.transformedText);
}

split() {
    // input---->  typescript, angular, web development, programming
    // output---> [ "typescript", " angular", " web development", " programming" ]

    this.transformedText = this.inputString.split(",");
    this.openModal(this.transformedText);
}

lastIndexOf() {
    // input----> shiv.sahu2394@gmail.com
    // output-----> 9

    let charIndex: number = this.inputString.lastIndexOf("."); // last occurence
    if (charIndex === -1) {
        // not found @
        this.transformedText = this.inputString;
    }
    this.transformedText = charIndex;
    this.openModal(this.transformedText);
}

indexOf() {
    // input----> shiv.sahu2394@gmail.com
    // output-----> 12

    this.transformedText = this.inputString.indexOf("."); // first occurence
    let charIndex: number = this.inputString.indexOf("."); // first occurence
    if (charIndex === -1) {
        // not found @
        this.transformedText = charIndex;
    }
    this.transformedText = charIndex;
    //return charIndex;
    this.openModal(this.transformedText);
}

slice() {
    // input----> 23-09-1994
    // output-----> 09

    this.transformedText = this.inputString.slice(3, 5); // 3 will include and 5 will exclude
    this.openModal(this.transformedText);
}

substring() {
    // input----> shivam sahu
    // output-----> shivam

    // extract first name from full name through substring mrthod
    let spaceIndex: number = this.inputString.indexOf(" "); // indexOf method give space index

    if (spaceIndex === -1) {
        // not found space
        this.transformedText = this.inputString;
    }

    // found space
    this.transformedText = this.inputString.substring(0, spaceIndex); // 0 will include and spaceIndex will exclude

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
        case "Uppercase Article":
            this.toUpperCase();
            break;
        case "Lowercase Article":
            this.toLowerCase();
            break;
        case "Capitalize Initial Character":
            this.capitalizeWords();
            break;
        case "Reverse Article":
            this.reverse();
            break;
        case "Remove Special Characters":
            this.removeSpecialCharacters();
            break;
        case "Remove Numericals":
            this.removeNumerals();
            break;
        case "Count Characters":
            this.countCharacters();
            break;
        case "Remove Spaces":
            this.removeSpaces();
            break;
        case "Count Vowels And Consonants":
            this.countVowelsAndConsonants();
            break;
        case "Replace Words With New Word":
            this.replace();
            break;
        case "Trim the whitespace from both ends":
            this.trim();
            break;
        case "substring()":
            this.substring();
            break;
        case "slice()":
            this.slice();
            break;
        case "indexOf()":
            this.indexOf();
            break;
        case "lastIndexOf()":
            this.lastIndexOf();
            break;
        case "split()":
            this.split();
            break;
        case "join()":
            this.join();
            break;
        case "includes()":
            this.includes();
            break;
        // Add cases for other buttons as needed
        default:
            console.log(`No action defined for`);
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
    this.inputString = "";
}

submit() {
    this.existingWord = this.replaceform.value.existingWord;
    this.newWord = this.replaceform.value.newWord;
    this.replace2();
    // let updatedArticle: string = article.split(oldWord).join(newWord);
}
find() {
    this.enterWord = this.findForm.value.enterWord;
    this.include2();
}
}
