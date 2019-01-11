
  render(){

    const { formLayout }   = this.state.formLayout;

    const results = (this.state.displayFetchedRecipes) ? true : false;

    // console.log(getAttribute('holidays'))


    const ingredientsData  = toOptAntD( getFormattedIngredients() );
    const ingredientsData2 = toOptAntD( getFormattedIngredients() );

    console.log(ingredientsData);
    console.log(ingredientsData2);


    const diets1   = toOptAntD( getFormattedAttributes('diets') );
    const diets2  = toOptAntD( getFormattedAttributes('diets') );


    const cuisine1   = toOptAntD( getFormattedAttributes('cuisine') );
    const cuisine2   = toOptAntD( getFormattedAttributes('cuisine') );

    const course1   = toOptAntD( getFormattedAttributes('course') );
    const course2   = toOptAntD( getFormattedAttributes('course') );

    const allergy1   = toOptAntD( getFormattedAttributes('allergy') );
    const allergy2   = toOptAntD( getFormattedAttributes('allergy') );


    const holidays1    = toOptAntD( getFormattedAttributes('holidays') );
    const holidays2   = toOptAntD( getFormattedAttributes('holidays') );



    return (
      <div>
        <Form {...formLayout} onSubmit={this.handleSubmit}>



        {/*onChange={this.handleFieldChange} value={this.state[field]} */}


          {/*}
          <GroupContainer >
            <Col span="12">
              <Input placeholder="Recipe Name" />
            </Col>
            <Col span="12">
              <Input id="time"
                onChange={this.updateMaxTime.bind(this)}
                placeholder="Maximum Cooking Time in Minutes" />
            </Col>
          </GroupContainer>





          <GroupContainer>
            <Col><Col span="12">
              <Attribute type="Allergy" onChange={this.onChangeAllergy} />
            </Col></Col>
            <Col><Col span="12">
              <Attribute type="Diet" onChange={this.onChangeDiet} />
            </Col></Col>
          </GroupContainer>
          <br />



          <br />
          */}







          <GroupContainer>
            {/*ingredients*/}
            <GroupedElements
              type={false}
              options1={ingredientsData}
              options2={ingredientsData2} />

          </GroupContainer>

          {/*holidays*/}
          <GroupedElements
            type={false}
            options1={holidays1}
            options2={holidays2} />

            {/* @TODO maybe we don't need to have 2 fields for diets */}
          {/*diets*/}
          <GroupedElements
            type={false}
            options1={diets1}
            options2={diets2} />

            {/*cuisine*/}
            <GroupedElements
              type={false}
              options1={cuisine1}
              options2={cuisine2} />

              {/*course*/}
              <GroupedElements
                type={false}
                options1={course1}
                options2={course2} />

                {/* @TODO maybe we don't need to have 2 fields for alleries */}
                {/*allergy*/}
                <GroupedElements
                  type={false}
                  options1={allergy1}
                  options2={allergy1} />






          <Button type="primary" htmlType="submit" icon="search">
            Search Recipes
          </Button>
        </Form>

        {/*searchResults*/}

      </div>
    );
  }
