<template>
    <h1>Password Generator</h1>
        <form @submit.prevent="generatePassword">
            <div class="forms">
                <div>
                    <label>Password Length</label>
                    <input class="pwdlength" type="number" v-model="pwdLength"/>
                </div>
                <h2>Choose the Password Options</h2>
                    <div>
                    <label>Include Numbers?</label>
                    <input class="cbox" type="checkbox" v-model="isNum" />
                </div>
                    <div>
                    <label>Include Capitals?</label>
                    <input class="cbox" type="checkbox" v-model="isCaps"/>
                </div>
                    <div>
                    <label>Include Symbols</label>
                    <input class="cbox" type="checkbox" v-model="isSymbs"/>
                </div>
                    <button>Generate Password</button>
            </div>
        </form>
                <div>
                    <label>Password :  </label>
                    <input class="pwd" type="text" :value="genPassword"/>
                </div>
                    
</template>

<script>
export default {
    data(){
        return {
            Nums:[0,1,2,3,4,5,6,7,8,9],
            Smalls: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
                    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

            Caps:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            
            SpSymbs:['!','@','#','$','%','^','&','*'],

            pwdLength:0,
            isNum: false,
            isCaps: false,
            isSymbs: false,
            totalAraay: [],
            genPassword:''
        };
    },
    methods: {
        generatePassword(){
            this.genPassword = '';
            this.totalAraay = '';
            this.totalAraay = this.Smalls;
            if(this.isNum){
                this.totalAraay = this.totalAraay.concat(this.Nums);
            }
            if(this.isCaps){
                this.totalAraay = this.totalAraay.concat(this.Caps);
            }
            if(this.isSymbs){
                this.totalAraay = this.totalAraay.concat(this.SpSymbs);
            }

            for(let i=0; i < this.pwdLength ; i++)
            {
                var num = Math.floor(Math.random()*this.totalAraay.length);
                this.genPassword = this.genPassword + this.totalAraay[num];
            }
        }
    }
};
</script>

<style>
.forms {
    max-width: 30rem;
    font-size: 18pt;
    border: 2px solid blue;
}
.cbox {
    width: 30px;
    height: 30px;
}
button {
    width: 30rem;
    font-size: 18pt;
}
.pwd {
    width: 20rem;
    height: 25pt;
    font-size: 18pt;
    text-align: center;
}
</style>
