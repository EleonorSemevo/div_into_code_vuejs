new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'Lary',
    course: 'web',
    acceptancePeriod: 'Janvier 2019',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'nom1', course: 'cours 1', acceptancePeriod: 'Janvier 2019' },
      { id: 2, name: 'nom3', course: 'cours 2', acceptancePeriod: 'Fevrier 2018' },
      { id: 3, name: 'nom3', course: 'cours 3', acceptancePeriod: 'Mars 2017' }
    ],
    error: ''
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
      if(this.nam !='' && this.course != '' && this.acceptancePeriod != '')
       {
         this.defaultLastId = this.defaultLastId + 1
         this.students.push({id: this.defaultLastId, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod})
         this.name = ''
         this.course = ''
         this.acceptancePeriod = ''
         this.error= ''
     }
     else {
       this.error= 'Ne laisser aucun champ vide';
     }

    }
  }
})
