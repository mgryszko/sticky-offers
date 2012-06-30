package com.stickyoffers;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import roboguice.activity.RoboActivity;
import roboguice.inject.InjectView;

import static com.google.zxing.integration.android.IntentIntegrator.QR_CODE_TYPES;


public class MainActivity extends RoboActivity {
    @InjectView(R.id.main)
    LinearLayout main;

    @InjectView(R.id.scan)
    Button scan;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        scan.setOnClickListener(new ScanOnClickListener());
    }

    private class ScanOnClickListener implements View.OnClickListener {
        @Override
        public void onClick(View v) {
            IntentIntegrator integrator = new IntentIntegrator(MainActivity.this);
            integrator.initiateScan(QR_CODE_TYPES);
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        IntentResult scanResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, intent);
        if (scanResult != null) {
            TextView result = new TextView(this);
            result.setLayoutParams(
                new LinearLayout.LayoutParams(ViewGroup.LayoutParams.FILL_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
            );
            result.setText(scanResult.getContents());
            main.addView(result, main.getChildCount());
        }
    }
}