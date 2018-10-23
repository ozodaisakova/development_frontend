<template>
<div>
  <v-layout v-if="preloader==true"  align-center   style="height:80vh;">
        <v-flex d-flex>
            <div class="text-xs-center">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="primary"
                    indeterminate></v-progress-circular>
            </div>
        </v-flex>
    </v-layout>
<v-stepper xs12 sm12 md12 v-else v-model="e6" vertical >
    <v-stepper-step :complete="e6 > 1" step="1">
      Выбор продукта 
      <small>Выберите количество и цвет продукта</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card color="grey lighten-5" class="mb-5 pa-2" >
          <v-layout row wrap>
              <v-flex xs12 sm6 md6 row  class="">
                   <v-card class="pa-4" >
              <v-layout>
                <v-flex xs5>
                  <v-img
                    v-for="(item, i) in images"
                    :key="i"
                    v-if="i==0"
                    :src="item.image"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="title">{{product.name}}</div>
                      <div>{{product.price}} тг</div> 
                      <v-btn small outline color="warning" router :to="`/product/`+product.id">подробнее</v-btn> 
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>             
            </v-card>
              </v-flex>
              <v-flex xs12 sm6 md6 class="pa-2">            
                <v-layout row wrap>
                  <v-flex xs12 md12 sm12 class="mt-4">
                        <v-select
                            label="Выберите цвет товара"
                            :items="colors"
                            item-text="color"
                            item-value="color"
                            class="mx-5">
                        </v-select>
                    </v-flex> 
                    <v-flex  xs4 sm4 md4 class="text-xs-right">
                        <v-btn 
                            fab
                            icon
                            small
                            @click="minusItem(item)"
                            color="secondary">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex  xs4 sm4 md4 class="text-xs-center" fill-height align-center>                        
                       <v-btn
                            fab
                            icon
                            small
                            color="secondary"
                            outline
                            >
                           <span> {{item}} </span> 
                        </v-btn>
                    </v-flex>
                    <v-flex  xs4 sm4 md4>
                        <v-btn
                            fab
                            icon
                            small
                            color="secondary"
                            @click="plusItem(item)">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-flex>
                     
                </v-layout>
                  
              </v-flex>
          </v-layout>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Следующий</v-btn>
      <v-btn flat router to="/">ОТМЕНИТЬ</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
        Заполнение данных
         <small>Заполните следующие формы </small>
    </v-stepper-step>
    
    <v-stepper-content step="2">
      <v-card color="grey lighten-5" class="mb-5 pa-4" >
        <v-form v-model="valid">
            <v-text-field
            v-model="name"       
            :rules="nameRules"
            :counter="30"
            label="Введите имя"
            required></v-text-field>
            <v-text-field
            v-model="surname"       
            :rules="surnameRules"
            :counter="30"
            label="Введите фамилию"
            required></v-text-field>
          <v-text-field  
            v-model="email"    
            :rules="emailRules"
            label="Адрес вашей электронной почты"
            required></v-text-field>
          <v-textarea
              v-model="adress"
              :rules="adressRules"
              name="input-7-1"
              label="Ваш адрес"
              value=""
              hint="Область, город, дом"
              required></v-textarea>
        </v-form>
        <v-dialog
          v-model="dialog"
          max-width="290">
          <v-card>
            <v-card-title class="headline red--text">Ошибка</v-card-title>
            <v-card-text class="red--text lighten-2 text-xs-jsutify">
              Вы должны заполнить и проверить  все поля. Ошибки показаны в нижнем краю текстого поле
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                flat="flat"
                @click="dialog = false">
                Закрыть
              </v-btn>              
            </v-card-actions>
          </v-card>
    </v-dialog>
      </v-card>
      <v-btn color="primary" @click="checkForm()">Следующий</v-btn>
      <v-btn flat  @click="e6=1">Предыдущий</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
        Оплата
        <small>Оплата продукта и завершение заказа</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <div color="grey lighten-5" class="mb-5 "  >
        <v-layout row wrap>
           <v-flex xs12 sm3 md3 d-flex ></v-flex>
        <v-flex xs12 sm6 md6 class="pt-3">
          <v-card>
            <div class="text-xs-center pt-5"><v-icon x-large >mdi-square-edit-outline</v-icon></div>
            <v-text-field
              outline
              d-flex
              label="Держатель карты"
              append-icon="mdi-account-box"
              hint="С латинскими буквами"
              class="px-2 pt-4 pb-3">
            </v-text-field>
            <v-text-field
              outline
              d-flex
              label="Номер карты"
              append-icon="mdi-credit-card"
              class="px-2">
            </v-text-field>
             <h5 class="pl-2 mb-3 subheading">Срок действия карты и CSV код</h5>
            <v-layout row wrap>
              <v-flex xs4 md4 sm4>
                <v-select
                    :items="month"
                    label="Месяц"
                    outline
                    class="pl-2 ">
                </v-select>
              </v-flex>
              <v-flex xs4 md4 sm4>
                <v-select
                    :items="year"
                    label="Год"
                    outline
                    class="pr-2 pl-2">
                </v-select>
              </v-flex>
              <v-flex xs4 md4 sm4>
                <v-text-field
                  outline
                  d-flex
                  :counter="3"
                  label="CSV-код"
                  class="pr-2">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm3 md3 d-flex></v-flex>
        </v-layout>
      </div>
      <v-btn :disabled="pay" :loading="pay" color="primary" @click.native="doPay()">Следующий</v-btn>
      <v-btn flat @click="e6=2">Предыдущий</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
        Показать чек
        <small>Экспорт чека</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-5" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1">Следующий</v-btn>
      <v-btn flat  @click="e6=3">Предыдущий</v-btn>
    </v-stepper-content>
  </v-stepper>
</div>  
</template>
<script>
  export default {
    data () {
      return {
        e6: 3,
        count: 1,
        color: '',
        urla: '', 
        product:[],
        images:[],
        colors:[{"color":"Нет вариантов"}],
        preloader: false,
        item: 1,
        valid: false,
        
        nameRules: [
          v => !!v || 'Поле имя обязателен',
          v => v.length <= 30 || 'Длина не должен превышать 30 символов'
        ],
      
        surnameRules: [
          v => !!v || 'Поле фамилия обязателен',
          v => v.length <= 30 || 'Длина не должен превышать 30 символов'
        ],
       
        adressRules: [
          v => !!v || 'Поле адресс обязателен',
        ],
        
        emailRules: [
          v => !!v || 'Поле почта обязателен',
          v => /.+@.+/.test(v) || 'Некорректный адрес почты'
        ],
        month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        year: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        dialog:false,
        pay: false,
        product_color:'',
        product_id: 0,
        product_count: 0,
        client_name: '',
        client_surname: '',
        client_email: '',
        client_adress:'',
        card_person:'',
        card_number:'',
        card_month:'',
        card_year: '',
        card_csv: ''
      }
    },
   
    mounted(){
        this.preloader= true
        var id = this.$route.params.id
        Promise.all([this.getProduct(id)])
                    .then(values=>{
                        this.product=values[0][0]
                        this.images=JSON.parse(values[0][0].images)
                        if(values[0][0].colors!=null) this.colors=JSON.parse(values[0][0].colors)
                        this.preloader=false
                    })
    },
    methods:{
      doPay(){
          this.pay=true
        },
       checkForm(){
          if(this.valid==true){
            this.e6=3
          }else{
            this.dialog = true

          }
        },
       plusItem(item){
                if(item<20)
                this.item=item+1
            },
        minusItem(item){
            if(item>1){
                this.item=item-1;
            }
        },
        async getProduct(id){
              const response = await this.$axios.$get("product/"+id)
              return response            
            }
      
      },
        
       
       
  }
</script>
