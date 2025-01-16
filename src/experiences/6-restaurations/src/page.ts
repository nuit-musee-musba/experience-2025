export class Page {
    container: HTMLElement;
    next: string;
    step: number;
    intro: boolean;
    header: boolean;
    progression: boolean;
    char: boolean;
    exp: boolean;
    titles: Array<string>;
    subs: Array<string>;
    modals: Array<Array<string>>;
    dialogues: Array<string>;


    
    constructor(container: HTMLElement, next: string = "", intro: boolean = false, step: number = 0, header: boolean = false, progression: boolean = false, exp: boolean = false, char: boolean = false, titles: Array<string> = [], subs: Array<string> = [], modals: Array<Array<string>> = [], dialogues: Array<string> = []){
        this.container = container
        this.next = next
        this.step = step
        this.intro = intro
        this.header = header
        this.progression = progression
        this.char = char
        this.exp = exp
        this.titles = titles
        this.subs = subs
        this.modals = modals
        this.dialogues =  dialogues

        if(intro){
            this.buildIntro()
        }
        if(header){
            this.buildHeader(this.titles, this.subs)
        }
        if(progression){
            this.buildProgression(this.step)
        }
        if(char){
            this.buildChar(this.dialogues, this.step, this.next)
        }
        if(exp){
            this.buildExp(this.modals, this.next)
        }
    }

    buildIntro(){return}
    buildHeader(titles: Array<string>, subs: Array<string>){return}
    buildProgression(step: number){return}
    buildChar(dialogues: Array<string>, step: number, next: string){return}
    buildExp(modals: Array<Array<string>>, next: string){return}

}