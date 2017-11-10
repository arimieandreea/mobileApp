
package com.example.myfirstapp;


import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;




public class MainActivity extends AppCompatActivity {

    // Array of strings...
    String[] pacientArray = {"Andreea Arimie","Ioana Bese","Raul Oproiu"};
    public static final String EXTRA_MESSAGE="com.example.myfirstapp.MESSAGE";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ArrayAdapter adapter = new ArrayAdapter<String>(this,
                R.layout.activity_listview,R.id.textView, pacientArray);

        final ListView listView = (ListView) findViewById(R.id.pacient_list);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String selectedObject = (String)listView.getItemAtPosition(position);
                Intent intent = new Intent(MainActivity.this, AboutPacient.class);
                intent.putExtra(EXTRA_MESSAGE, selectedObject);
                startActivity(intent);


            }
        });

    }

}
